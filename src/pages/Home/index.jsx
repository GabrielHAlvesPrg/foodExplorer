import { Container, Banner, Main } from './styles';

import bannerImg from '../../assets/bannerHome.svg';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

import { AiOutlineRight } from 'react-icons/ai';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

//import das imagens dos pratos
import saladaRavanellaImg from '../../assets/plates/saladaRavanella.svg';
import torradasDeParmaImg from '../../assets/plates/torradasDeParma.svg';
import spaguettiGambeImg from '../../assets/plates/spaghettiGambe.svg';
import saladaMallaImg from '../../assets/plates/saladaMolla.svg'

 
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
          <button className='btnScrollLeft'>
            <BsChevronRight
              color='#FFFFFF'
              fontSize='25px'
            />
          </button>
          
          <Menu
            img={saladaRavanellaImg}
            title="Salada Ravanella"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
            price="49,97"
          />

          <Menu
            img={torradasDeParmaImg}
            title="Torradas de Parma"
            description="Presunto de parma e rúcula em um pão com fermentação natural."
            price="25,97"
          />

          <Menu
            img={spaguettiGambeImg}
            title="Spaguetti Gambe"
            description="Massa fresca com camarões e pesto."
            price="79,97"
          />

          <Menu
            img={saladaMallaImg}
            title="Salada Molla"
            description="Tomates, coentro, pepino, cebola roxa. Frescos e temperados."
            price="19,97"
          />
         
         <button className='btnScrollRight'>
            <BsChevronLeft
              color='#FFFFFF'
              fontSize='25px'
            />
          </button>
          
        </div>

        
      </Main>

      <Footer/>
    </Container>
  )
}