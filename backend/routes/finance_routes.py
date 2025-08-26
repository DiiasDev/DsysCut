from flask import Flask, Blueprint, jsonify, request
from models.finance import Finance
from conn import db
from auth import token_required

finance_bp = Blueprint('finance_bp', __name__)


@finance_bp.route('/registers', methods=["POST"])
def register_tipes():
    try:
        return jsonify({"status": "Sucess", "message": "Sucesso ao registrar tipos"})
    except Exception as e:
        return jsonify({"status": "Error", "message": f"Erro ao Registrar entrada {e}"})
