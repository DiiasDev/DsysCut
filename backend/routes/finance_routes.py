from flask import Flask, Blueprint, jsonify, request
from models.finance import Finance
from conn import db
from auth import token_required

finance_bp = Blueprint('finance_bp', __name__)


@finance_bp.route('/registers', methods=["POST"])
# @token_required
def register_tipes():
    try:
        # 1. capturando dados do request
        data = request.get_json()

        # 2. criando variavel para receber os dados armazenados do request
        registers = Finance(
            valor=data.get("valor"),
            descricao=data.get("descricao"),
            categoria=data.get("categoria"),
            tipo=",".join(data.get("tipo")) if isinstance(
                data.get("tipo"), list) else data.get("tipo")
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
    from services.finance_service import Fservice 
    service = Fservice()
    total = service.calculate_entrada()
    return jsonify({"total_entrada": total})