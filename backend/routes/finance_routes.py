from flask import Flask, Blueprint, jsonify, request
from models.finance import Finance
from conn import db
from auth import token_required
from services.finance_service import Fservice


finance_bp = Blueprint('finance_bp', __name__)
service = Fservice()


@finance_bp.route('/registers', methods=["POST"])
@token_required
def register_tipes(current_cliente):
    try:
        data = request.get_json()
        tipo_valor = data.get("tipo")
        if isinstance(tipo_valor, list):
            tipo_valor = tipo_valor[0]
        tipo_valor = "Despesa" if str(tipo_valor).lower().startswith("desp") else "Receita"
        registers = Finance(
            cliente_id=current_cliente.id,  # Vincula ao cliente logado!
            valor=data.get("valor"),
            descricao=data.get("descricao"),
            categoria=data.get("categoria"),
            tipo=tipo_valor,
            data_movimentacao=data.get("data_movimentacao")
        )
        db.session.add(registers)
        db.session.commit()
        return jsonify({"status": "Success", "message": "Sucesso ao registrar tipos"})
    except Exception as e:
        return jsonify({"status": "Error", "message": f"Erro ao Registrar entrada {e}"})


@finance_bp.route('/get_registers', methods=["GET"])
@token_required
def get_registers(current_cliente):
    try:
        registers = Finance.query.filter_by(cliente_id=current_cliente.id).all()
        result = [{
            "id": r.id,
            "valor": float(r.valor),
            "descricao": r.descricao,
            "tipo": r.tipo,
            "categoria": r.categoria,
            'data_movimentacao': str(r.data_movimentacao)
        } for r in registers]
        return jsonify({"status": "Success", "message": result})
    except Exception as e:
        return jsonify({"status": "Error", "message": str(e)})


@finance_bp.route('/total_entrada', methods=["GET"])
@token_required
def total_entrada(current_cliente):
    total = service.calculate_entrada(current_cliente.id)
    return jsonify({"total_entrada": total})


@finance_bp.route('/total_despesa', methods=["GET"])
@token_required
def total_despesa(current_cliente):
    try:
        total = service.calculate_despesa(current_cliente.id)
        return jsonify({"total_despesa": total})
    except Exception as e:
        print(f"\n\n\n\n\n\n\n\n\n\n\n\n\n\nErro: {str(e)}")
        return str(e)


@finance_bp.route('/total_somado', methods=['GET'])
@token_required
def total_somado(current_cliente):
    try:
        total_somado = service.calculate_total(current_cliente.id)
        return jsonify({"total_somado": total_somado})
    except Exception as e:
        print(f"\n\n\n\n\n\n\n\n\n\n\n\n\n\nErro route: {str(e)}")
        return str(e)
