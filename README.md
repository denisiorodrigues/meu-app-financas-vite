# Meu app de finanças

Um aplicativo para ajudar nas finanças pessoais.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Vamos utilizar a estrutura de pastas
```plaintext
src/
├── components/
│   ├── TransactionForm.js
│   ├── TransactionList.js
│   └── ... (outros componentes)
├── services/
│   └── localStorageService.js
├── App.js
├── index.js
└── ... (outros arquivos, estilos, etc.)
```

## Wiki

Documentação


### Local Storage
- `getTransactions(): ITransaction[]`: Indica que a função `getTransactions` retorna um array de `ITransaction`. O `as ITransaction[]` é um "type assertion" que informa ao TypeScript que o resultado do `JSON.parse` deve ser tratado como um array de `ITransaction`.

 - `saveTransactions(transactions: ITransaction[]): void`: Indica que a função `saveTransactions` aceita um parâmetro `transactions` que é um array de `ITransaction` e não retorna nada (`void`).

### Componente formulário de transação
- `React.FC<TransactionFormProps>`: Indica que `TransactionForm` é um "Function Component" do React
      que aceita as propriedades definidas na interface `TransactionFormProps`.
- `useState<string>('')`: Define que o estado `description` (e `amount`, `category`) será do tipo `string`.
- `useState<'expense' | 'income'>('expense')`: Define que o estado `type` só pode ser 'expense' ou 'income'.
- `categories: string[]`: Indica que `categories` é um array de strings.
- `e: React.FormEvent`: Tipagem para o evento do formulário.
- `newTransaction: ITransaction`: Garante que o objeto `newTransaction` segue a estrutura definida na interface `ITransaction`.
- `id: Date.now().toString()`: Mudei o `id` para `string` na interface `ITransaction` e aqui, pois usar `Date.now()` como número pode ter colisões em registros muito rápidos e string é mais flexível.

### Componente lista de trasações
- `React.FC<TransactionListProps>`: Indica que `TransactionList` é um "Function Component" do React
    que aceita as propriedades definidas na interface `TransactionListProps`.
- `transactions.map((transaction: ITransaction) => (...))`: Tipamos o parâmetro `transaction`
    dentro do `map` para garantir que estamos iterando sobre objetos `ITransaction`.