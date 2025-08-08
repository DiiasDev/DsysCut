from flask import Blueprint, jsonify, request, current_app
from models.user import User
from conn import db

user_bp = Blueprint('user_bp', __name__)


@user_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = [{
        "id": u.id,
        "name": u.name,
        "email": u.email,
        "telefone": u.telefone
    } for u in users]
    return jsonify({"status": "success", "users": result})


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
