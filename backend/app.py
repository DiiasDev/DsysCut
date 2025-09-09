from flask import Flask, send_from_directory
from routes.user_routes import user_bp
from conn import db
from config import Config
from flask_cors import CORS
from routes.finance_routes import finance_bp
from routes.client_routes import client_bp
from routes.agendamento_routes import agendamento_bp
from routes.barber_routes import barber_bp
import os


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
    app.register_blueprint(agendamento_bp, url_prefix='/api/agendamento')
    app.register_blueprint(barber_bp, url_prefix='/api/barber')

    @app.route('/uploads/<path:filename>')
    def uploaded_file(filename):
        return send_from_directory(os.path.join(os.getcwd(), 'uploads'), filename)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(port=3005, debug=True)
