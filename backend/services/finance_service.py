from models.finance import Finance
from datetime import datetime
from sqlalchemy import extract

class Fservice():
    def __init__(self):
        pass

    def calculate_entrada(self, cliente_id):
        now = datetime.now()
        entradas = Finance.query.filter(
            Finance.cliente_id == cliente_id,
            Finance.tipo == "Receita",
            extract('month', Finance.data_movimentacao) == now.month,
            extract('year', Finance.data_movimentacao) == now.year
        ).all()
        total_entradas = sum([e.valor for e in entradas])
        return total_entradas

    def calculate_despesa(self, cliente_id):
        now = datetime.now()
        despesas = Finance.query.filter(
            Finance.cliente_id == cliente_id,
            Finance.tipo == "Despesa",
            extract('month', Finance.data_movimentacao) == now.month,
            extract('year', Finance.data_movimentacao) == now.year
        ).all()
        total_despesas = sum([d.valor for d in despesas])
        return total_despesas

    def calculate_total(self, cliente_id):
        try:
            total_entradas = self.calculate_entrada(cliente_id)
            total_despesas = self.calculate_despesa(cliente_id)
            total_somado = total_entradas - total_despesas
            return total_somado
        except Exception as e:
            print(f'Erro service: {e}')
            return str(e)