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
  //max-width: 136.6rem;
  max-width: 136.8rem;

  display: flex;

  margin: 0 auto;
  margin-top: 9.1rem;
  margin-bottom: 25.5rem;

  padding: 0 2.0rem;

  gap: 8.0rem;

  .sectionDetails{
    margin-top: 5.0rem;
  }

  .plateImg {
    width: 38.9rem;
    height: 38.9rem;

    border-radius: 50%;

    text-align: center;
    align-items: center;
  }

  .title {
    font-size: 4.0rem;
    font-weight: 500;
    margin-bottom: 2.0rem;
  }

  .description {
    width: 60.3rem;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-bottom: 2.6rem;
    line-height: 140%;
    text-align: justify;
  }
  

  .ingredients{
    text-align: center;
    margin-bottom: 4.7rem;

    

    p {
      font-size: 1.8rem;
      font-weight: 400;
    }

    li {
      list-style: none;

      margin-left: 2.0rem;

      img {
        width: 6.0rem;
        height: 6.0rem;
      }
    }

    li:first-child{
      margin-left: 0;
    }
  }
  
  ul {
    display: flex;
  }

  .price-quantity-button{
    display: flex;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.BLUE_100};

    margin-right: 5.6rem;
    margin-top: .7rem;
  }

  .add {
    display: flex;


  }  

  .btnRemove-btnIncrement{
    display: flex;
    gap: 1.7rem;

    margin-right: 2.7rem;
  }

  #remove {
    background: none;
    border: none;

    padding-bottom: .6rem;
  }

  .quantity {
    font-size: 2.0rem;
    font-weight: 700;

    padding-top: 1.2rem;
  }

  #increment {
    background: none;
    border: none;
  }

  .buttonRemove {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 2.0rem;
    margin-top: 0.8rem;
  }

  .buttonAdd {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-Size:2.0rem;
  }

  #include{
    width: 12.0rem;
    height: 5.6rem;
  }
`;