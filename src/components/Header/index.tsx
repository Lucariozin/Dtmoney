import * as Styled from './styles';

import logoImg from '../../assets/img/logo.svg'

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Wrapper>
    
        <Styled.Logo src={logoImg} alt="dtmoney" />
        <Styled.Button 
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </Styled.Button>
       
      </Styled.Wrapper>

      
    </Styled.Container>
  );
}
