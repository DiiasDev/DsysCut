from flask import Blueprint, jsonify, request, current_app
from models.user import User
from conn import db
from auth import token_required, generate_jwt_token

user_bp = Blueprint('user_bp', __name__)


@user_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        user = User.query.filter_by(email=email).first()
        if user and user.password == password:
            token = generate_jwt_token(user.id)
            return jsonify({"status": "Sucess", "message": "sucesso ao logar", "token": token})
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
# @token_required
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
@token_required
def delete_users(user_id):
    try:

        user = User.query.get(user_id)
        db.session.delete(user)
        db.session.commit()

        return jsonify({"status": "sucess", "message": f"Usuário {user_id} deletado"})
    except Exception as e:
        return jsonify({"status": "error", "message": "erro ao deletar usuários"})
