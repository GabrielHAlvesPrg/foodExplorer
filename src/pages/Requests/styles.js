import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Main = styled.div`
  max-width: 136.0rem;
  margin: 0 auto;

  padding-left: 2.5rem;
  padding-right: 2.5rem;

  margin-top: 3.4rem;

  h1 {
    margin-bottom: 3.4rem;

    font-weight: 500;
    font-size: 3.2rem;

    font-family: var(--ff-secondary);
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }
  
  /*Tabela*/
  table {
    //width: 80vw;
    width: 127.0rem;

    
    margin-bottom: 41.5rem;

    
    
    border-collapse: collapse; 


    
    border-radius: 200px; 

    
  
  }


  table * {
    font-size: 1.4rem;
    font-family: var(--ff-primary);
    font-weight: 400;
    border: .1rem solid ${({theme}) => theme.COLORS.TABLE_BORDER};
  }

  table th:first-child {
    border-top-left-radius: .5rem;
    padding-right: 3.0rem;
  }

  table th:last-child {
    border-top-right-radius: .5rem;
  }

  table th {
    text-align: left;
    font-weight: normal; 
  }

  table tr {
    
  }

  tr:first-child {
    
  }
  

  table thead tr th:first-child {
    padding-left: 4.0rem;
  }

  table tr th{
    padding: 2.0rem;
  }

  table td {
    padding: 2.0rem;
    text-align: left;
    
  }

  td:nth-child(1) {
    //background-color: blue;
    
  }

  td img {
    margin-right: .8rem;
  }

  td.status {
  align-items: center;
  }

`;