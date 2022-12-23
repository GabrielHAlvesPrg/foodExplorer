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

  h1 {
    font-family: var(--ff-secondary);
    font-weight: 500;
    font-size: 3.2rem;

    margin-bottom: 3.9rem;

    color: ${({theme}) => theme.COLORS.GRAY_400};
  }

  .pratosPrincipais {
    display: flex;

    gap: 2.7rem;

    max-width: 112.0rem;
  }
`;