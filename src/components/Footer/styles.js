import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;

  //position: absolute;
  //bottom: 0;

  padding: 2.3rem;

  background: ${({theme}) => theme.COLORS.BACKGROUND_500};

  font-family: var(--ff-baseboard);
`;

export const Main = styled.div`
  max-width: 136.6rem;
  
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  
  align-items: center;
  

  div {
    display: flex;
    gap: 1.1rem;
  }

  img {
    width: 2.9rem;
    height: 2.9rem;
    
    margin-top: 0.3rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    
    color: rgba(255, 255, 255, 0.3);
  }

  .subtitle{
    width: 25.2rem;
    height: 1.8rem;
  }
`;