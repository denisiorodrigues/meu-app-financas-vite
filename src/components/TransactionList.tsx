import React from 'react';
import type { ITransaction, TransactionListProps } from '../types';

/**
 * @function TransactionList
 * @description Componente para exibir uma lista de transações.
 * @param {TransactionListProps} props - As propriedades do componente, incluindo o array de transações.
 */
const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {

  if (transactions.length === 0) {
    return <p>Nenhuma transação registrada ainda.</p>;
  }

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>Minhas Transações</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {transactions.map((transaction: ITransaction) => (
          <li
            key={transaction.id}
            style={{
              padding: '10px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: transaction.type === 'income' ? '#e6ffe6' : '#ffe6e6',
              marginBottom: '5px',
              borderRadius: '4px'
            }}
          >
            <div>
              <strong>{transaction.description}</strong>
              <br />
              <small>Categoria: {transaction.category}</small>
              <br />
              <small>Data: {transaction.date}</small>
            </div>
            <span style={{ fontWeight: 'bold', color: transaction.type === 'income' ? 'green' : 'red' }}>
              {transaction.type === 'expense' ? '-' : '+'}{' '}
              R$ {transaction.amount.toFixed(2).replace('.', ',')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;