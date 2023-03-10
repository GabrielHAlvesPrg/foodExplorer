import styled from "styled-components";

export const Container = styled.div`
  width: 108.0rem;
  margin: 0 auto;
  margin-top: 14.2rem;
  display: flex;

  
  > h1 {
    white-space: nowrap;
    width: 25.5rem;
    font-size: 4.2rem;
    
    margin-top: 30.4rem;
    margin-right: 31.0rem;
    padding-left: 2.0rem;
    
    
  }

`;

export const Main = styled.main`
  width: 47.6rem;
  height: 62.0rem;
  
  margin-top:4.0rem;

  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1.6rem;
  
  .content {
    width: 32.0rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .input {
    margin-bottom: 3.8rem;
  }

  .label {
    color: ${({ theme }) => theme.COLORS.LABEL};
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    //border:solid 1px ${({ theme }) => theme.COLORS.WHITE};
    //border-radius: 0.5rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-top: 6.4rem;
    margin-bottom: 3.2rem;
   
    text-align: center;
  }

  button {
    width: 100%;
    height: 4.8rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;