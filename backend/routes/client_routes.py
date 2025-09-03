from flask import Flask, Blueprint, jsonify, request
from models.client import Client
from conn import db
from auth import token_required
from services.client_service import CService


client_bp = Blueprint('client_bp', __name__)
service = CService()


@client_bp.route('/register_client', methods=['POST'])
@token_required
def register_client(current_cliente):
    try:
        data = request.get_json()
        clients = Client(
            cliente_id=current_cliente.id,  # Vincula ao cliente logado!
            nome=data.get('nome'),
            telefone=data.get('telefone'),
            mensalista=data.get('mensalista'),
            quantidade_cortes=data.get('quantidade_cortes'),
            instagram=data.get('instagram'),
        )
        db.session.add(clients)
        db.session.commit()
        return jsonify({'status': 'sucess', 'message': clients})
    except Exception as e:
        return str(e)


@client_bp.route('/get_client', methods=['GET'])
@token_required
def get_client(current_cliente):
    try:
        clients = Client.query.filter_by(cliente_id=current_cliente.id).all()
        result = [{
            'id': c.id,
            'nome': c.nome,
            'telefone': c.telefone,
            'mensalista': c.mensalista,
            'quantidade_cortes': c.quantidade_cortes,
            'instagram': c.instagram,
        } for c in clients]
        return jsonify({'status': 'sucess', 'clientes': result})
    except Exception as e:
        return str(e)
