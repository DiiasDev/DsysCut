from flask import Flask, Blueprint, jsonify, request
from models.finance import Finance
from conn import db
from auth import token_required
from services.finance_service import Fservice


finance_bp = Blueprint('finance_bp', __name__)
service = Fservice()


@finance_bp.route('/registers', methods=["POST"])
# @token_required
def register_tipes():
    try:
        # 1. capturando dados do request
        data = request.get_json()

        # 2. criando variavel para receber os dados armazenados do request
        tipo_valor = data.get("tipo")[0] if isinstance(
            data.get("tipo"), list) else data.get("tipo")
        if tipo_valor.lower().startswith("desp"):
            tipo_valor = "Despesas"
        registers = Finance(
            valor=data.get("valor"),
            descricao=data.get("descricao"),
            categoria=data.get("categoria"),
            tipo=tipo_valor
        )

        # 3. Adicionando dados da variavel e salvando no banco.
        db.session.add(registers)
        db.session.commit()

        return jsonify({"status": "Sucess", "message": "Sucesso ao registrar tipos"})
    except Exception as e:
        return jsonify({"status": "Error", "message": f"Erro ao Registrar entrada {e}"})


@finance_bp.route('/get_registers', methods=["GET"])
def get_registers():
    try:
        registers = Finance.query.all()
        result = [{
            "id": r.id,
            "valor": r.valor,
            "descricao": r.descricao,
            "tipo": r.tipo,
            "categoria": r.categoria
        } for r in registers]
        return jsonify({"status": "Sucess", "message": result, })
    except Exception as e:
        return jsonify({"status": "Error", "message": str(e)})


@finance_bp.route('/total_entrada', methods=["GET"])
def total_entrada():
    total = service.calculate_entrada()
    return jsonify({"total_entrada": total})


@finance_bp.route('/total_despesa', methods=["GET"])
def total_despesa():
    try:
        total = service.calculate_despesa()
        return jsonify({"total_despesa": total})
    except Exception as e:
        print(f"\n\n\n\n\n\n\n\n\n\n\n\n\n\nErro: {str(e)}")
        return str(e)
