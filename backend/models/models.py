from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Cliente(db.Model):
    __tablename__ = 'clientes'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    agendamentos = db.relationship('Agendamento', back_populates='cliente')

class Agendamento(db.Model):
    __tablename__ = 'agendamentos'
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('clientes.id'), nullable=False)
    data = db.Column(db.DateTime, nullable=False)
    corte = db.Column(db.String(100), nullable=False)
    cliente = db.relationship('Cliente', back_populates='agendamentos')