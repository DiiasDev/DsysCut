from flask import Blueprint, jsonify, request, current_app
from sqlalchemy import text
from conn import db
from datetime import datetime

api_bp = Blueprint('api', __name__)


@api_bp.route("/create-user", methods=["POST"])
def create_user():
    try:
        data = request.get_json()

        name = data.get("name")
        email = data.get("email")
        telefone = data.get("telefone")
        password = data.get("password")

        sql = text(
            "INSERT INTO usuarios (name,email,telefone,password) VALUES (:name,:email,:telefone,:password)")
        result = db.session.execute(sql,
                                    {
                                        "name": name,
                                        "email": email,
                                        "telefone": telefone,
                                        "password": password
                                    }
                                    )
        db.session.commit()
        return jsonify({"status": "sucess", "message": "Sucesso ao cadastrar usuário"})
    except Exception as e:
        return jsonify({"status": "error", "message": e, })


@api_bp.route("/users", methods=["GET"])
def get_users():
    try:
        sql = text("SELECT * FROM usuarios")
        result = db.session.execute(sql)
        users = [{
            "id": row.id,
            "name": row.name,
            "email": row.name,
            "telefone": row.telefone,
            "password": row.password
        } for row in result]
        db.session.execute(sql)
        return jsonify({"status": "Sucess", "users": users})
    except Exception as e:
        return jsonify({"status": "error", "message": e})


@api_bp.route("/delete-user/<int:user_id>", methods=["DELETE"])
def delete_users(user_id):
    try:

        sql = text("DELETE FROM usuarios WHERE id = :user_id")
        db.session.execute(sql, {"user_id": user_id})
        db.session.commit()

        return jsonify({"status": "sucess", "deletado": user_id})
    except Exception as e:
        return jsonify({"status": "error", "message": "erro ao deletar usuários"})
