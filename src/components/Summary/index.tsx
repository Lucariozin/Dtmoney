import * as Styled from './styles';

import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import totalImg from '../../assets/img/total.svg';

import { TotalCard } from '../TotalCard';

import { useTransaction } from '../../hooks/useTransaction';

export function Summary() {
  const { transactions } = useTransaction();

  const totalDeposit = transactions.reduce((ac, transaction) => {
    if (transaction.type === 'deposit') {
      return ac += transaction.value;
    }

    return ac;
  }, 0);

  const totalWithdraw = transactions.reduce((ac, transaction) => {
    if (transaction.type === 'withdraw') {
      return ac += transaction.value;
    }

    return ac;
  }, 0);

  const totalAmount = totalDeposit - totalWithdraw;

  return (
    <Styled.Container>
      <TotalCard 
        title='Entradas' 
        icon={incomeImg} 
        totalValue={totalDeposit} 
      />

      <TotalCard 
        title='Saídas' 
        icon={outcomeImg} 
        totalValue={totalWithdraw} 
      />

      <TotalCard 
        title='Total' 
        icon={totalImg} 
        totalValue={totalAmount} 
        backgroundGreen
      />
    </Styled.Container>
  );
}
