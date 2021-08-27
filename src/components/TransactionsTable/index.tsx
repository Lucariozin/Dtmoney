import * as Styled from './styles';

import { TransactionItem } from '../TransactionItem';
import { useTransaction } from '../../hooks/useTransaction';

export function TransactionsTable() {
  const { transactions } = useTransaction();

  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.Thead>
          <Styled.Tr>
            <Styled.Th>Título</Styled.Th>
            <Styled.Th>Valor</Styled.Th>
            <Styled.Th>Categoria</Styled.Th>
            <Styled.Th>Data</Styled.Th>
          </Styled.Tr>
        </Styled.Thead>
        <Styled.Tbody>

          {transactions.map((transaction) => (
            <TransactionItem 
              key={transaction.id}
              type={transaction.type}
              title={transaction.title}
              category={transaction.category}
              value={transaction.value}
              date={transaction.createdAt}
            />
          ))}
          
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Container>
  );
}
