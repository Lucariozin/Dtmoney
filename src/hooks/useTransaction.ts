import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionsContext';

export function useTransaction() {
  const { transactions, createTransaction } = useContext(TransactionContext);

  return { transactions, createTransaction };
}
