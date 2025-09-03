from flask import Flask, Blueprint, jsonify, request
from models.client import Client
from conn import db
from auth import token_required
from services.client_service import CService
import os


client_bp = Blueprint('client_bp', __name__)
service = CService()

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@client_bp.route('/register_client', methods=['POST'])
@token_required
def register_client(current_cliente):
    try:
        nome = request.form.get('nome')
        telefone = request.form.get('telefone')
        mensalista = request.form.get('mensalista') == "true"
        quantidade_cortes = request.form.get('quantidade_cortes')
        instagram = request.form.get('instagram')
        imagem_file = request.files.get('imagem')
        imagem_path = None

        print("DEBUG imagem_file:", imagem_file)  # Adicione este print

        if imagem_file and imagem_file.filename:
            filename = imagem_file.filename
            imagem_path = os.path.join('uploads', filename)
            imagem_file.save(os.path.join(UPLOAD_FOLDER, filename))
            # Adicione este print
            print("DEBUG imagem_path salvo:", imagem_path)

        clients = Client(
            cliente_id=current_cliente.id,
            nome=nome,
            telefone=telefone,
            mensalista=mensalista,
            quantidade_cortes=quantidade_cortes,
            instagram=instagram,
            imagem=imagem_path
        )
        db.session.add(clients)
        db.session.commit()
        # Serializa os dados do cliente para JSON
        client_data = {
            'id': clients.id,
            'nome': clients.nome,
            'telefone': clients.telefone,
            'mensalista': clients.mensalista,
            'quantidade_cortes': clients.quantidade_cortes,
            'instagram': clients.instagram,
            'imagem': clients.imagem
        }
        return jsonify({'status': 'sucess', 'message': client_data})
    except Exception as e:
        print("DEBUG erro:", e)  # Adicione este print
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
            'imagem': c.imagem  # Adiciona o campo imagem
        } for c in clients]
        return jsonify({'status': 'sucess', 'clientes': result})
    except Exception as e:
        return str(e)
