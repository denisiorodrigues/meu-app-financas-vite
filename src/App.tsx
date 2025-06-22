// src/App.tsx
import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { getTransactions, saveTransactions } from './services/localStorageService';
import type { ITransaction } from './types';

function App() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]); // Tipamos o estado

  useEffect(() => {
    const storedTransactions: ITransaction[] = getTransactions(); // Tipamos a constante
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  /**
   * @function handleAddTransaction
   * @description Adiciona uma nova transação ao estado e a salva no LocalStorage.
   * @param {ITransaction} newTransaction - O objeto da nova transação a ser adicionada.
   */
  const handleAddTransaction = (newTransaction: ITransaction) => { // Tipamos o parâmetro
    const updatedTransactions: ITransaction[] = [...transactions, newTransaction]; // Tipamos a constante
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>Meu App de Finanças Pessoais</h1>
      </header>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;