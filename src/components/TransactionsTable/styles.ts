import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 19rem;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  max-width: 110rem;
  width: 100%;
  margin: 0 1rem;
  margin-bottom: 2rem;
  border-spacing: 0 0.8rem;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray);

  padding-bottom: 1.5rem;

  &:nth-child(1) {
    padding-left: 3rem;
  }

  &:nth-child(4) {
    text-align: right;
    padding-right: 7.7rem;
  }
`;
