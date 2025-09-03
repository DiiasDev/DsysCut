from flask import Flask
from routes.user_routes import user_bp
from conn import db
from config import Config
from flask_cors import CORS
from routes.finance_routes import finance_bp
from routes.client_routes import client_bp


def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"])  # <-- Adicione esta linha
    app.config.from_object(Config)
    db.init_app(app)
    with app.app_context():
        db.create_all()  # <-- CRIA AS TABELAS!
    app.register_blueprint(user_bp, url_prefix='/api')
    app.register_blueprint(finance_bp, url_prefix='/api/finance')
    app.register_blueprint(client_bp, url_prefix='/api/client')
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(port=3005, debug=True)
