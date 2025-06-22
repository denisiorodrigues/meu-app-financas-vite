import React, { useState } from 'react';
import type { ITransaction, TransactionFormProps } from '../types';

/**
 * @function TransactionForm
 * @description Componente de formulário para adicionar novas transações (receitas ou despesas).
 * @param {TransactionFormProps} props - As propriedades do componente, incluindo onAddTransaction.
 */
const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<string>(''); // Mantemos como string para o input type="number"
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [category, setCategory] = useState<string>('');

  const categories: string[] = [
    'Alimentação', 'Transporte', 'Salário', 'Contas', 'Lazer', 'Saúde', 'Educação', 'Outros'
  ];

  /**
   * @function handleSubmit
   * @description Lida com o envio do formulário, criando uma nova transação e chamando o callback.
   * @param {React.FormEvent} e - O evento de envio do formulário.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount || !category) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const newTransaction: ITransaction = { // Tipamos o objeto newTransaction
      id: Date.now().toString(), // Convertemos para string para o ID
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    };

    onAddTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>Adicionar Nova Transação</h2>
      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ex: Café da manhã"
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
      </div>
      <div>
        <label htmlFor="amount">Valor:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ex: 25.50"
          step="0.01"
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
      </div>
      <div>
        <label htmlFor="type">Tipo:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as 'expense' | 'income')} // Type assertion para garantir o tipo
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        >
          <option value="expense">Despesa</option>
          <option value="income">Receita</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Categoria:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((cat: string) => ( // Tipamos o parâmetro `cat`
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
        Adicionar Transação
      </button>
    </form>
  );
};

export default TransactionForm;