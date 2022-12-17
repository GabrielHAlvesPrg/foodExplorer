import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 4.8rem;
  border: 0;
  padding: 1.2rem auto;
  border-radius: 1.0rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;