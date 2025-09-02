from models.finance import Finance
from datetime import datetime
from sqlalchemy import extract,func


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

    def get_data_receita_mensal(self, cliente_id):
        try:
            receitas = (
                Finance.query
                .filter(Finance.cliente_id == cliente_id, Finance.tipo == "Receita")
                .with_entities(
                    func.sum(Finance.valor).label("receita"),
                    extract('month', Finance.data_movimentacao).label("mes"),
                    extract('year', Finance.data_movimentacao).label("ano")
                )
                .group_by(
                    extract('month', Finance.data_movimentacao),
                    extract('year', Finance.data_movimentacao)
                )
                .order_by(
                    extract('year', Finance.data_movimentacao),
                    extract('month', Finance.data_movimentacao)
                )
                .all()
            )
            data = [
                {
                    "receita": float(r.receita),
                    "periodo": f"{int(r.mes):02d}/{int(r.ano)}"
                }
                for r in receitas
            ]
            return data
        except Exception as e:
            print("Erro do get_receita_mensal", e)
            return str(e)

    def get_data_despesa_mensal(self, cliente_id):
        try:
            despesas = (
                Finance.query
                .filter(Finance.cliente_id == cliente_id, Finance.tipo == "Despesa")
                .with_entities(
                    func.sum(Finance.valor).label("despesa"),
                    extract('month', Finance.data_movimentacao).label("mes"),
                    extract('year', Finance.data_movimentacao).label("ano")
                )
                .group_by(
                    extract('month', Finance.data_movimentacao),
                    extract('year', Finance.data_movimentacao)
                )
                .order_by(
                    extract('year', Finance.data_movimentacao),
                    extract('month', Finance.data_movimentacao)
                )
                .all()
            )
            data = [
                {
                    "despesa": float(d.despesa),
                    "periodo": f"{int(d.mes):02d}/{int(d.ano)}"
                }
                for d in despesas
            ]
            return data
        except Exception as e:
            print("Erro do get_despesa_mensal", e)
            return str(e)

    def get_despesas_por_categoria(self, cliente_id):
        try:
            despesas = (
                Finance.query
                .filter(Finance.cliente_id == cliente_id, Finance.tipo == "Despesa")
                .with_entities(
                    func.sum(Finance.valor).label("valor"),
                    Finance.categoria.label("categoria")
                )
                .group_by(Finance.categoria)
                .order_by(func.sum(Finance.valor).desc())
                .all()
            )
            data = [
                {
                    "categoria": d.categoria,
                    "valor": float(d.valor)
                }
                for d in despesas
            ]
            return data
        except Exception as e:
            print("Erro do get_despesas_por_categoria", e)
            return str(e)
