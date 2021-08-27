import * as Styled from './styles';

type TotalCardProps = {
  title: string;
  icon: string;
  totalValue: number;
  backgroundGreen?: boolean;
}

export function TotalCard({ 
  title, 
  icon, 
  totalValue, 
  backgroundGreen = false 
}: TotalCardProps) {
  return (
    <Styled.Container backgroundGreen={backgroundGreen}>
      <Styled.TitleContainer>
        <Styled.Title lightColor={backgroundGreen}>{title}</Styled.Title>
        <Styled.Icon src={icon} alt={title} />
      </Styled.TitleContainer>

      <Styled.TotalValue 
        lightColor={backgroundGreen}
      >
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(totalValue)}
      </Styled.TotalValue>
    </Styled.Container>
  );
}
