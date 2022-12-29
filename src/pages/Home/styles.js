import styled from "styled-components";

export const Container = styled.div`
  

`;

export const Banner = styled.div`
  width: 112.0rem;
  height: 26.0rem;

  margin: 0 auto;

  margin-top: 16.4rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px;

  display: flex;

  align-items: center;

  img {
    margin-bottom: 15.0rem;
    position: relative;
    left: -50px;
  }

  h1 {
    font-weight: 500;
    font-size: 4.0rem;
  }

  p {
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 0.8rem;
  }

  h1, p {
    font-family: var(--ff-secondary);
  }
`;

export const Main = styled.div`
  width: 112.0rem;

  margin: 0 auto;

  margin-top: 6.2rem;

  position: relative;

  h1 {
    font-family: var(--ff-secondary);
    font-weight: 500;
    font-size: 3.2rem;

    margin-bottom: 3.9rem;

    color: ${({theme}) => theme.COLORS.GRAY_400};
  }

  section {
    position: relative;
  }

  .btnScrollLeft {
    position: absolute;
    width: 8.0rem;
    height: 30.0rem;
    left: 0px;
    top: 90px;
    
    margin-top: 10.0rem;

    border-top-left-radius: 1.0rem;
    border-bottom-left-radius: 1.0rem;

    border: none;

    z-index: 1;

    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
   
    transform: matrix(-1, 0, 0, 1, 0, 0);
    
  }

  .btnScrollRight{
    position: absolute;
    width: 8.0rem;
    height: 30.0rem;
    right: 0px;
    top: 90px;

    margin-top: 10.0rem;

    border-top-right-radius: 1.0rem;
    border-bottom-right-radius: 1.0rem;

    border: none;

    z-index: 1;

    background: linear-gradient(-90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
   
    transform: matrix(-1, 0, 0, 1, 0, 0);
 
  }

  .pratos-principais, .sobremesas, .bebidas {
    display: flex;

   

    max-width: 112.0rem;

    overflow: auto;
  
    ::-webkit-scrollbar {
      display: none;
      /*
        background-color: #1d1d1d;
        color: white;
        width: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      */
    }
    ::-webkit-scrollbar-thumb {
      /*
      background-color: #5b5b5b;
      border-radius: 5px;
      */
    }
  }

  .lista-pratos {
    display: flex;

    gap: 2.7rem;

    list-style: none;
  }

  section:last-child{
    margin-bottom: 8.8rem;
  }

  .lista-sobremesa {
    display: flex;

    gap: 2.7rem;

    list-style: none;
  }

  .lista-bebidas {
    display: flex;

    gap: 2.7rem;

    list-style: none;
  }



`;