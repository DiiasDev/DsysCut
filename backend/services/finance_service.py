from routes.finance_routes import Finance

class Fservice():
    def __init__(self):
        pass
    
    def calculate_entrada(self):
        entradas = Finance.query.filter(Finance.tipo == "Receita").all()
        total_entradas = sum([e.valor for e in entradas])
        return total_entradas
    
    def calculate_despesa(self):
        despesas = Finance.query.filter(Finance.tipo == "Despesa").all()
        total_despesas = sum([d.valor for d in despesas])
        return total_despesas