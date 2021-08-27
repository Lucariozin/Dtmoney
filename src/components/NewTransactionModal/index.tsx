import * as Styled from './styles';

import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import closeImg from '../../assets/img/close.svg';

import { FormEvent, useState } from 'react';

import Modal from 'react-modal';
import { useTransaction } from '../../hooks/useTransaction';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  closeModal: () => void;
}

export function NewTransactionModal({ isOpen, closeModal }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransaction();

  function setAllStatesToInitialValues() {
    setTitle('');
    setType('deposit');
    setValue('');
    setCategory('');
  }

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    setAllStatesToInitialValues();

    const data = {
      type,
      title,
      value: Number(value),
      category,
    };

    await createTransaction(data);

    closeModal();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content" 
    >
      <Styled.Form>
        <Styled.CloseButton type="button" onClick={closeModal}>
          <Styled.Img src={closeImg} alt="Botão para fechar o modal" />
        </Styled.CloseButton>

        <Styled.H2>Cadastrar transação</Styled.H2>

        <Styled.Input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Styled.Input 
          type="number" 
          placeholder="Valor" 
          value={value}
          onChange={(e) => setValue((e.target.value).replace(',', '.'))}
        />

        <Styled.TransactionTypeContainer>
          <Styled.CheckIncome
            type="button"
            onClick={() => setType('deposit')} 
            isActive={type === 'deposit'}
          >
            <Styled.Img src={incomeImg} alt="Entrada" />
            Entrada
          </Styled.CheckIncome>

          <Styled.CheckOutcome
            type="button"
            onClick={() => setType('withdraw')} 
            isActive={type === 'withdraw'}
          >
            <Styled.Img src={outcomeImg} alt="Saída" />
            Saída
          </Styled.CheckOutcome>
        </Styled.TransactionTypeContainer>

        <Styled.Input 
          type="text" 
          placeholder="Categoria" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Styled.Button 
          type="submit" 
          onClick={handleCreateNewTransaction}
        >
          Cadastrar
        </Styled.Button>
      </Styled.Form>
    </Modal>
  );
}
