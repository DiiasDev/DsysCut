from conn import db


class Client(db.Model):
    __tablename__ = 'clientes'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    telefone = db.Column(db.String(20), nullable=False, unique=True)
    mensalista = db.Column(db.Boolean, default=False)
    quantidade_cortes = db.Column(db.Integer, nullable=True)
    instagram = db.Column(db.String(100), nullable=True, unique=True)
    imagem = db.Column(db.String(255))
    cliente_id = db.Column(db.Integer, db.ForeignKey(
        'usuarios.id'), nullable=False)
