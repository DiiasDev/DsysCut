from flask import Flask, Blueprint, jsonify, request
from models.client import Client
from conn import db
from auth import token_required
from services.agendamento_service import AService
import os

agendamento_bp = Blueprint('agendamento_bp', __name__)
service = AService()


@agendamento_bp.route('/register_agendamento', methods=['POST'])
@token_required
def register_agendamento():
    try:
        return jsonify({'status': 'Sucess', 'message': 'Agendamento criado com sucesso!'})
    except Exception as e:
        print(f'\n\n\n\n\n\n\nErro route de registro {str(e)}')
        return jsonify({'status': 'Error'})
