from flask import Blueprint, jsonify, request, current_app
from models.user import User
from conn import db
import jwt
from datetime import datetime, timedelta
from functools import wraps

user_bp = Blueprint('user_bp', __name__)
SECRET_KEY = 'Ch4v34l34t0r14'

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token ausente!'}), 401
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            current_user = User.query.get(data['user_id'])
        except Exception as e:
            return jsonify({'message': 'Token inválido!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

def generate_jwt_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(hours=1)
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
    return token

@user_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        user = User.query.filter_by(email=email).first()
        if user and user.password == password:
            token = generate_jwt_token(user.id)
            return jsonify({"status": "Sucess", "message": "sucesso ao logar","token": token})
        else:
            return jsonify({"status": "Error", "message": "Usuário ou senha inválidos"}), 401
    except Exception as e:
        return jsonify({"status": "Error", "message": str(e)}), 500


@user_bp.route('/users', methods=['GET'])
@token_required
def get_users():
    try:
        users = User.query.all()
        result = [{
            "id": u.id,
            "name": u.name,
            "email": u.email,
            "telefone": u.telefone
        } for u in users]
        return jsonify({"status": "success", "users": result})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})


@user_bp.route("/create-user", methods=["POST"])
def create_user():
    try:
        data = request.get_json()

        user = User(
            name=data.get("name"),
            email=data.get("email"),
            telefone=data.get("telefone"),
            password=data.get("password")
        )

        db.session.add(user)
        db.session.commit()

        return jsonify({"status": "sucess", "message": "Sucesso ao cadastrar usuário"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})


@user_bp.route("/delete-user/<int:user_id>", methods=["DELETE"])
def delete_users(user_id):
    try:

        user = User.query.get(user_id)
        db.session.delete(user)
        db.session.commit()

        return jsonify({"status": "sucess", "message": f"Usuário {user_id} deletado"})
    except Exception as e:
        return jsonify({"status": "error", "message": "erro ao deletar usuários"})
