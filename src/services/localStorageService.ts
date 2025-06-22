import type { ITransaction } from '../types'; // Importa a interface ITransaction

/**
 * @function getTransactions
 * @description Recupera as transações salvas no LocalStorage.
 * @returns {ITransaction[]} Um array de transações, ou um array vazio se não houver nenhuma.
 */
export const getTransactions = (): ITransaction[] => {
  const transactions = localStorage.getItem('financesTransactions');
  return transactions ? (JSON.parse(transactions) as ITransaction[]) : [];
};

/**
 * @function saveTransactions
 * @description Salva um array de transações no LocalStorage.
 * @param {ITransaction[]} transactions - O array de transações a ser salvo.
 */
export const saveTransactions = (transactions: ITransaction[]): void => {
  localStorage.setItem('financesTransactions', JSON.stringify(transactions));
};

/*
  Documentação:
  - `getTransactions(): ITransaction[]`: Indica que a função `getTransactions` retorna um array de `ITransaction`.
    O `as ITransaction[]` é um "type assertion" que informa ao TypeScript que o resultado do `JSON.parse`
    deve ser tratado como um array de `ITransaction`.
  - `saveTransactions(transactions: ITransaction[]): void`: Indica que a função `saveTransactions`
    aceita um parâmetro `transactions` que é um array de `ITransaction` e não retorna nada (`void`).
*/