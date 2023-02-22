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
  max-width: 136.0rem;

  margin: 0 auto;

  .btn-adicionar-imagem{
    display: flex;
    flex-direction: column;
    margin-right: 7.8rem;

    label {
      margin-bottom: .8rem;
    }
    
    button {
      height: 5.0rem;
      width: 22.9rem;
      border: 1px solid #FFFFFF;
      border-radius: 5px;
      background: none;
      color: ${({theme}) => theme.COLORS.WHITE};

      transition: 100ms linear;
    }

    button:hover{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
      transition: 100ms linear;
    }
  }

  h1 {
    margin-bottom: 3.2rem;
    font-family: var(--ff-secondary);
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }

  .teste {
    width: 102.0rem;
    //max-width: 1020px;
  }

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