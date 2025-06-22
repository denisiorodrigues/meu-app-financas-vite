/**
 * @interface ITransaction
 * @description Define a estrutura de um objeto de transação.
 * @property {string} id - ID único da transação.
 * @property {string} description - Descrição da transação.
 * @property {number} amount - Valor da transação.
 * @property {'expense' | 'income'} type - Tipo da transação ('expense' para despesa, 'income' para receita).
 * @property {string} category - Categoria da transação.
 * @property {string} date - Data da transação no formato 'YYYY-MM-DD'.
 */

export interface ITransaction {
  id: string;
  description: string;
  amount: number;
  type: 'expense' | 'income';
  category: string;
  date: string;
}

/**
 * @interface TransactionFormProps
 * @description Define as props para o componente TransactionForm.
 * @property {(transaction: ITransaction) => void} onAddTransaction - Função de callback para adicionar uma nova transação.
 */
export interface TransactionFormProps {
  onAddTransaction: (transaction: ITransaction) => void;
}

/**
 * @interface TransactionListProps
 * @description Define as props para o componente TransactionList.
 * @property {ITransaction[]} transactions - Um array de objetos de transação.
 */
export interface TransactionListProps {
  transactions: ITransaction[];
}
