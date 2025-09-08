from conn import db


class Agendamento(db.Model):
    __tablename__ = 'agendamentos'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey(
        'clientes.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey(
        'usuarios.id'), nullable=False)
    barbeiro_id = db.Column(db.Integer, db.ForeignKey(
        'usuarios.id'), nullable=False)
    data_agendamento = db.Column(db.Date, nullable=False)
    hora_agendamento = db.Column(db.Time, nullable=False)
    status = db.Column(db.String(30), default='pendente')
    observacoes = db.Column(db.String(255))
    criado_em = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp())
    atualizado_em = db.Column(
        db.TIMESTAMP,
        server_default=db.func.current_timestamp(),
        server_onupdate=db.func.current_timestamp()
    )
