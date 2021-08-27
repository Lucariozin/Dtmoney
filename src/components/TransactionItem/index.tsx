import * as Styled from './styles';

type TransactionItemProps = {
  type: string;
  title: string;
  value: number;
  category: string;
  date: string;
}

export function TransactionItem({ 
  type, 
  title, 
  value, 
  category, 
  date 
}: TransactionItemProps) {
  return (
    <Styled.Tr>
      <Styled.Td>{title}</Styled.Td>
      <Styled.TdPrice type={type}>

        {type === 'withdraw' ? '- ' : ''}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}

      </Styled.TdPrice>
      <Styled.Td>{category}</Styled.Td>
      <Styled.Td>
        {new Intl.DateTimeFormat('pt-BR').format(new Date(date))}
      </Styled.Td>
    </Styled.Tr>
  );
}
