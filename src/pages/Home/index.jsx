import { Container, Banner, Main } from './styles';

import bannerImg from '../../assets/bannerHome.svg';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu'

import saladaRavanellaImg from '../../assets/saladaRavanella.svg'

export function Home(){
  return (
    <Container>
      <Header/>
      
      <Banner>
        <img src={bannerImg} alt="Imagem do banner" />

        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>

      <Main>
        
        <h1>Pratos principais</h1>

        <div className="pratosPrincipais">
          <Menu
            img={saladaRavanellaImg}
            title="Salada Ravanella"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="49,97"
          />

          <Menu
            img={saladaRavanellaImg}
            title="Salada Ravanella"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price="49,97"
          />


        </div>

        
      </Main>

      <Footer/>
    </Container>
  )
}