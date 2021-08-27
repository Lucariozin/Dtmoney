import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

type Transaction = {
  id: number;
  type: string;
  title: string;
  value: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionProviderProps = {
  children: ReactNode;
}

type TransactionContextData = {
  transactions: Transaction[];
  createTransaction: (data: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function getAllTransactions() {
      const response = await api.get('/transactions');
      setTransactions(response.data.transactions);
    }

    getAllTransactions();
  }, []);

  async function createTransaction(data: TransactionInput) {
    const newData = {
      createdAt: new Date(),
      ...data,
    }

    const response = await api.post('/transactions', newData);

    setTransactions([...transactions, response.data.transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
