from flask import Flask, Blueprint, jsonify, request
from models.agendamento import Agendamento
from conn import db
from auth import token_required
from services.agendamento_service import AService
import os

agendamento_bp = Blueprint('agendamento_bp', __name__)
service = AService()


@agendamento_bp.route('/register_agendamento', methods=['POST'])
def register_agendamento():
    try:
        data = request.get_json()
        cliente_id = data.get('cliente_id')

        agendamentos = Agendamento(
            cliente_id=cliente_id,
            usuario_id=data.get('usuario_id'),
            barbeiro_id=data.get('barbeiro_id'),
            servico_nome=data.get('servico_nome'),
            data_agendamento=data.get('data_agendamento'),
            hora_agendamento=data.get('hora_agendamento'),
            status=data.get('status'),
            observacoes=data.get('observacoes'),
            criado_em=data.get('criado_em'),
        )

        db.session.add(agendamentos)
        db.session.commit()
        return jsonify({'status': 'Success', 'message': 'Agendamento criado com sucesso!', 'agendamento_id': agendamentos.id}), 201
    except Exception as e:
        print(f'\n\n\n\n\n\n\nErro route de registro {str(e)}')
        return jsonify({'status': 'Error'})
