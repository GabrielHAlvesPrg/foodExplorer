import styled from "styled-components";

export const Container = styled.div`
  width: 30.0rem;
  height: 51.2rem;

  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 3.9rem;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  padding-top: 5.6rem;
`;

export const Main = styled.div`
  margin: 0 auto;

  width: 30.0rem; 
  height: 51.2rem;

  text-align: center;

  

  .favorite {
    background: none;

    border: none;

    position: absolute;
    left: 85%;
    right: 6.36%;
    top: 4.1%;
    bottom: 91.64%;
  }

  .pratoImg {
    width: 17.6rem;
    height: 17.6rem;
    border-radius: 50%;
  }

  > button {
    font-family: var(--f-secondary);
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;

    margin-top: 1.6rem;
    margin-bottom: 1.6rem;

    color: ${({theme}) => theme.COLORS.GRAY_400};
    background: none;

    border: none;

    .teste {
      font-size: 1.8rem;
      margin-left: 0.3rem;
      padding-top: 0.2rem;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;

    color: #C4C4CC;
    line-height: 160%;
    margin: 0 auto 1.6rem;

    text-align: center;
    width: 22.0rem;
    height: 4.4rem;
  }

  > h1 {
    color: ${({theme}) => theme.COLORS.BLUE_100};
    font-weight: 400;
    font-size: 3.2rem;

    margin-bottom: 3.0rem;
    
  }

  .add {
    display: flex;

    width: 20.8rem;
    height: 4.8rem;
    
    margin: 0 auto;

    gap: 1.5rem;

    
    #remove{ 
      margin-top: 0.5rem;
      background: none;
      border: none;
      width: 18px;
      height: 1.5px;
    }

    p {
      margin-top: 0.6rem;
      font-weight: 700;
      font-size: 2.0rem;
      line-height: 160%;
    }

    #increment {
      margin-top: 11px;

      background: none;
      border: none;
      width: 18px;
      height: 18px;
    }

    #incluir {
      margin-left: .7rem;
    }

    .gradd{
      width: 1.8rem;
      height: 1.8rem;
      color: red;
    }
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

`;