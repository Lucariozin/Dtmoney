import { Home } from './pages/Home';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { useState } from 'react';
import { TransactionProvider } from './contexts/TransactionsContext';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <TransactionProvider>
        
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        
        <Home />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          closeModal={handleCloseNewTransactionModal}
        />
        
      </TransactionProvider>
    </>
  );
}
