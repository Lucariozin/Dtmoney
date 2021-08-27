import styled, { css } from "styled-components";

export const Tr = styled.tr`
  background-color: var(--white);
  height: 6.4rem;
`;

export const Td = styled.td`
  color: var(--gray);
  font-size: 1.6rem;

  &:nth-child(1) {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    padding-left: 3rem;
    color: var(--dark-gray);
  }

  &:nth-child(4) {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding-right: 3rem;
    text-align: right;
  }
`;

type TdPriceProps = {
  type: string;
}

export const TdPrice = styled(Td)`
  ${({ type }: TdPriceProps) => css`
    color: ${type === 'deposit' ? 'var(--green)' : 'var(--red)'};
  `}
`;
