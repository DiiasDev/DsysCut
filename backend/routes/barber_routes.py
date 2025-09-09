from flask import Flask, Blueprint, jsonify, request
from models.barber import Barber
from conn import db
from auth import token_required
from services.barber_service import BService
import os

barber_bp = Blueprint('barber_bp', __name__)
service = BService()


@barber_bp.route('register_barber', methods=['POST'])
def register_barber():
    try:
        data = request.get_json()

        barbeiros = Barber(
            usuario_id=data.get('usuario_id'),  # Adicione esta linha!
            id=data.get('id'),
            nome=data.get('nome'),
            telefone=data.get('telefone'),
            expediente_inicio=data.get('expediente_inicio'),
            expediente_fim=data.get('expediente_fim'),
            dias_expediente=data.get('dias_expediente'),
            ativo=data.get('ativo'),
            criado_em=data.get('criado_em'),
        )
        db.session.add(barbeiros)
        db.session.commit()
        return jsonify({'status': 'Sucess', 'message': 'Sucesso ao cadastrar barbeiro'})
    except Exception as e:
        return str(e)
