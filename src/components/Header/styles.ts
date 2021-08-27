import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
  width: 100%;
  height: 20rem;

  position: absolute;
`;

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 17rem;
  height: 4rem;
`;

export const Button = styled.button`
  padding: 1.2rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;

  color: var(--white);
  background-color: var(--light-blue);

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
