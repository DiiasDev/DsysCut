from conn import db


class Barber(db.Model):
    __tablename__ = 'barbeiros'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey(
        'usuarios.id'), nullable=False)  # Remova a vírgula aqui!
    nome = db.Column(db.String(100), nullable=False)
    telefone = db.Column(db.String(20))
    expediente_inicio = db.Column(db.Time, nullable=False)
    expediente_fim = db.Column(db.Time, nullable=False)
    dias_expediente = db.Column(db.String(50), nullable=False)
    ativo = db.Column(db.Boolean, default=True)
    criado_em = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp())
