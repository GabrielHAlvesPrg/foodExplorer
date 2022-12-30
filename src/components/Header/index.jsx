import { Container, Main } from './styles';
import { BsSearch } from 'react-icons/bs';

import logoImg from '../../assets/Polygon.svg';
import logoutImg from '../../assets/Logout.svg';
import invoiceIconImg from '../../assets/invoice.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Header(){
  return (
    <Container>
      <Main>
        <div>
          <img src={logoImg} alt="Logotipo" className='logotipo'/>
          <h1>food explorer</h1>
        </div>

        <a href="">Meus favoritos</a>

        <Input
          className="search"
          placeholder="Busque pelas opções de pratos"
          type="text"
          icon={BsSearch}
          background
        />

        <Button
          title="Meu pedido (0)"
          src={invoiceIconImg}
        >
        
        
        </Button>


        <a href=""><img src={logoutImg} alt="ícone para sair da aplicação"/></a>
      </Main>
    </Container>
  )
}