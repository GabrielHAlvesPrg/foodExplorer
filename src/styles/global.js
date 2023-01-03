import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {     
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      color: white;
      width: 7px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
        
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
      border-radius: 5px; 
    }
  }

  :root {
    font-size: 62.5%;

    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Poppins', sans-serif;
    --ff-baseboard: 'DM Sans', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: var(--ff-primary);
    outline: none; // remove as linhas de contornos.
    font-size: 1.6rem;
  }

  //font do texto do rodapé: font-family: 'DM Sans', sans-serif;

  button {
    font-family: var(--ff-secondary);
    outline: none;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(1.2);
  }
`;