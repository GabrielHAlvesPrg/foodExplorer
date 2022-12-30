import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 10.4rem;  

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
`;

export const Main = styled.div`
  max-width: 136.6rem;
  

  margin: 0 auto;

  display: flex;

  white-space: nowrap;

  align-items: center;

  padding-top: 2.5rem;
  gap: 3.2rem;


  > div {
    display: flex;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-left: 1.1rem;
      }
  }

  .logotipo {
    width: 3.0rem;
    height: 3.0rem;
  }

  .search {
    width: 34.4rem;
    height: 1.6rem;

    border: none;
  }

  > button {
    font-size: 1.4rem;
    width: 500px;
  }

  > a {
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-top: .5rem;
  }
`;