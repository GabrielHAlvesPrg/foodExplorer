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

  width: 24.6rem;

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

  > h2 {
    font-family: var(--f-secondary);
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;

    margin-top: 1.6rem;
    margin-bottom: 1.8rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.4rem;

    color: #C4C4CC;
    line-height: 160%;
    margin-bottom: 1.6rem;
  }

  > h1 {
    color: ${({theme}) => theme.COLORS.BLUE_100};
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;
  }

  .add {
    display: flex;

    gap: 15px;

    #remove{ 
      margin-top: 5px;
      background: none;
      border: none;
      width: 18px;
      height: 1.5px;
    }

    p {
      margin-top: 5px;
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
      margin-left: 1.9rem;
    }
  }

`;