from conn import db


class User(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    telefone = db.Column(db.String(20))
    usuario = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
