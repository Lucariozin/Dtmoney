import styled, { css } from "styled-components";

export const Form = styled.form`
  background-color: var(--light-gray);
  width: 100%;
  border-radius: 0.5rem;
  padding: 6.4rem 4.8rem;
`;

export const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  color: var(--dark-gray);
  padding: 2rem 2.4rem;
  background-color: var(--medium-gray);
  border: 0.1rem solid #D7D7D7;
  border-radius: 0.5rem;

  margin-top: 1.5rem;
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

type CheckIncomeProps = {
  isActive: boolean;
}

export const CheckIncome = styled.button<CheckIncomeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  font-size: 1.6rem;
  padding: 2rem 2.4rem;
  color: var(--dark-gray);
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  cursor: pointer;

  transition: all .2s ease-in-out;

  > img {
    width: 2rem;
    height: 2rem;
    margin-right: 1.3rem;
  }

  ${({ isActive }) => css`
    background-color: ${isActive ? '#33cc9533' : 'initial'};
    border: ${isActive ? '0.2rem solid #33cc9533' : '0.2rem solid var(--medium-gray)'};
  `}
`;

export const CheckOutcome = styled(CheckIncome)`
  ${({ isActive }) => css`
    background-color: ${isActive ? '#e62e4d33' : 'initial'};
    border: ${isActive ? '0.2rem solid #e62e4d33' : '0.2rem solid var(--medium-gray)'};
  `}
`;

export const Button = styled.button`
  width: 100%;
  padding: 2rem 0;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  color: var(--white);
  background-color: var(--green);
  border-radius: 0.5rem;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Img = styled.img``;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;

  width: 1.4rem;
  height: 1.4rem;

  background: transparent;
  border: none;

  transition: filter .2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
