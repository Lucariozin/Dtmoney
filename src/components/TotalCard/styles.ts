import styled, { css } from 'styled-components';

type ContainerProps = {
  backgroundGreen: boolean;
}

export const Container = styled.div`
  width: 35rem;
  height: 13.5rem;

  ${({ backgroundGreen }: ContainerProps) => css`
    background-color: ${backgroundGreen ? 'var(--green)' : 'var(--white)'};
  `}

  border-radius: 0.5rem;
  padding: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TitleProps = {
  lightColor: boolean;
}

export const Title = styled.p`
  font-size: 1.6rem;
  
  ${({ lightColor }: TitleProps) => css`
    color: ${lightColor ? 'var(--white)' : 'var(--dark-gray)'};
  `}
`;

export const Icon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const TotalValue = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
  display: block;
  margin-top: 1rem;

  ${({ lightColor }: TitleProps) => css`
    color: ${lightColor ? 'var(--white)' : 'var(--dark-gray)'};
  `}
`;
