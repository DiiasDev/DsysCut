from routes.finance_routes import Finance
from flask import jsonify


class Fservice():
    def __init__(self):
        pass

    def calculate_entrada(self):
        entradas = Finance.query.filter(Finance.tipo == "Receita").all()
        total_entradas = sum([e.valor for e in entradas])
        return total_entradas

    def calculate_despesa(self):
        despesas = Finance.query.filter(Finance.tipo.like("%Despesas%")).all()
        total_despesas = sum([d.valor for d in despesas])
        return total_despesas

    def calculate_total(self):
        try:
            entradas = Finance.query.filter(Finance.tipo == "Receita").all()
            total_entradas = sum([e.valor for e in entradas])
            despesas = Finance.query.filter(
                Finance.tipo.like("%Despesas%")).all()
            total_despesas = sum([d.valor for d in despesas])
            total_somado = total_entradas - total_despesas

            return total_somado
        except Exception as e:
            print(f'\n\n\n\n\n\n\n\n\nErro service: ', e)
            return str(e)
