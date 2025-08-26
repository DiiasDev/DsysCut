from conn import db 

class Finance(db.Model):
    __tablename__ = 'financeiro'
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.Enum('Receita', 'Despesas'), nullable=False)
    descricao = db.Column(db.String(255), nullable=False)
    valor = db.Column(db.Numeric(10,2), nullable=False)
    categoria = db.Column(db.String(255), nullable=False)