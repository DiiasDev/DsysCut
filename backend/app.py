from flask import Flask
from routes.user_routes import user_bp
from conn import db
from config import Config
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"])  # <-- Adicione esta linha
    app.config.from_object(Config)
    db.init_app(app)
    with app.app_context():
        db.create_all()  # <-- CRIA AS TABELAS!
    app.register_blueprint(user_bp, url_prefix='/api')
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(port=3005, debug=True)
