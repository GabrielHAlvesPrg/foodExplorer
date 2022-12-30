import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  height: 5.0rem;

  border: ${props => props.border ? `solid 1px ${props.theme.COLORS.WHITE}` : "none"};
  //border:solid 1px ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${props => props.background ? `${props.theme.COLORS.BACKGROUND_400}` : "none"};
  //background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin-top: 0.5rem;

  padding: 1.2rem;
  
  border-radius: 0.5rem;

  > input {
    
   // height: 5.6rem;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

  }
`;