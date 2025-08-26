import { getTotalEntrada } from "../services/financeService";

class useFinance {
  receita: number = 0;

  async calcReceita() {
    try {
      this.receita = await getTotalEntrada();
      return this.receita;
    } catch (error) {
      return error;
    }
  }
}
