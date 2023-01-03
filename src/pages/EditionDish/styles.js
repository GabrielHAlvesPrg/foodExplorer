import styled from "styled-components";

export const Container = styled.div`
  
  #btnComeBack{
    margin: 0 auto;
    max-width: 136.8rem;
    //padding-left: 2.0rem;
  }

  .voltar{
    display: flex;
    align-items: center;

    margin-top: 4.4rem;
    margin-bottom: 2.4rem;

    //padding-left: 2.0rem;

    border: none;
    
    background: none;
    color: ${({theme}) => theme.COLORS.GRAY_400};
    font-size: 24px;
    font-weight: 500;
    
    img {
     margin-right: 1.1rem;
    }
  }
`;

export const Main = styled.div`
  width: 136.0rem;

  margin: 0 auto;

  .introduction{
    display: flex;
  }

  .ingredientes-preco{
    display: flex;
  }

  .descricao{
    display: flex;
    flex-direction: column;
  }

`;