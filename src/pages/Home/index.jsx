import { Container, Banner, Main } from './styles';

import bannerImg from '../../assets/bannerHome.svg';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

import { AiOutlineRight } from 'react-icons/ai';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

//import imagens dos pratos ----------------- (APAGAR DEPOIS QUE FIZER A API)
import saladaRavanellaImg from '../../assets/plates/saladaRavanella.svg';
import torradasDeParmaImg from '../../assets/plates/torradasDeParma.svg';
import spaguettiGambeImg from '../../assets/plates/spaghettiGambe.svg';
import saladaMallaImg from '../../assets/plates/saladaMolla.svg';

//import imagens sobremesas ----------------- (APAGAR DEPOIS QUE FIZER A API)
import prugnaPieImg from '../../assets/desserts/prugnaPie.svg';
import peachyPastrieImg from '../../assets/desserts/peachyPastrie.svg';
import macaronsImg from '../../assets/desserts/macarons.svg';
import boloDamascoImg from '../../assets/desserts/boloDeDamasco.svg';

//impor imagens bebidas ----------------- (APAGAR DEPOIS QUE FIZER A API)
import sucoMaracujaImg from '../../assets/drinks/sucoDeMaracuja.svg';
import espressoImg from '../../assets/drinks/expresso.svg';
import teAutunnoImg from '../../assets/drinks/teDautunno.svg';
import pomoBourbon from '../../assets/drinks/pomoBourbon.svg';
 
export function Home(){
  function scrollList (){
    
    /*
    document.addEventListener('DOMContentLoaded', function () {
      var button = document.getElementById('.lista-pratos');
      button.onclick = function () {
          document.getElementById('.lista-pratos').scrollLeft += 20;
      };
  }, false);
    */


    //window.scroll(30, 0)
    console.log('oi')
   
  }
  
  
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
        
        <section>
          <h1>Pratos principais</h1>

          <div className="pratos-principais">

            <ul className='lista-pratos'>
              <button onClick={scrollList} className='btnScrollLeft'>
                <BsChevronRight
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
              <li>
                <Menu
                  img={saladaRavanellaImg}
                  title="Salada Ravanella"
                  description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
                  price="49,97"
                />
              </li>

              <li>
                <Menu
                  img={torradasDeParmaImg}
                  title="Torradas de Parma"
                  description="Presunto de parma e rúcula em um pão com fermentação natural."
                  price="25,97"
                />
              </li>

              <li>
                <Menu
                  img={spaguettiGambeImg}
                  title="Spaguetti Gambe"
                  description="Massa fresca com camarões e pesto."
                  price="79,97"
                />
              </li>

              <li>
                <Menu
                  img={saladaMallaImg}
                  title="Salada Molla"
                  description="Tomates, coentro, pepino, cebola roxa. Frescos e temperados."
                  price="19,97"
                />
              </li>

              <button onClick={scrollList} className='btnScrollRight'>
                <BsChevronLeft
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
            </ul> 
          </div>
        </section>

        <section>
          <h1>Sobremesas</h1>

          <div className="sobremesas">

            <ul className='lista-sobremesa'>
              <button className='btnScrollLeft'>
                <BsChevronRight
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
              <li>
                <Menu
                  img={prugnaPieImg}
                  title="Prugna Pie"
                  description="Torta de ameixa com massa amanteigada, polvilho em açúcar."
                  price="59,97"
                />
              </li>

              <li>
                <Menu
                  img={peachyPastrieImg}
                  title="Peachy pastrie"
                  description="Delicioso folheado de pêssego com folhas de hortelã."
                  price="32,97"
                />
              </li>

              <li>
                <Menu
                  img={macaronsImg}
                  title="Macarons"
                  description="Farinha de amêndoas, manteiga, claras e açúcar."
                  price="79,97"
                />
              </li>

              <li>
                <Menu
                  img={boloDamascoImg}
                  title="Bolo de damasco"
                  description="Damasco fresco em uma massa sem glúten."
                  price="19,97"
                />
              </li>

              <button className='btnScrollRight'>
                <BsChevronLeft
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
            </ul> 
          </div>
        </section>

        <section>
          <h1>Bebidas</h1>

          <div className="bebidas">

            <ul className='lista-bebidas'>
              <button className='btnScrollLeft'>
                <BsChevronRight
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
              <li>
                <Menu
                  img={sucoMaracujaImg}
                  title="Suco de maracujá"
                  description="Suco de maracujá gelado, cremoso e docinho."
                  price="32,97"
                />
              </li>

              <li>
                <Menu
                  img={espressoImg}
                  title="Café Espresso"
                  description="Café cremoso feito na temperatura e pressões perfeitas."
                  price="49,97"
                />
              </li>

              <li>
                <Menu
                  img={teAutunnoImg}
                  title="Tè d'autunno >"
                  description="Chá de anis, camela e limão. Sinta o outono italiano."
                  price="19,97,"
                />
              </li>

              <li>
                <Menu
                  img={pomoBourbon}
                  title="Pomo bourbon"
                  description="Maçã, whisky, canela. On the rocks."
                  price="79,97"
                />
              </li>
              
              <button className='btnScrollRight'>
                <BsChevronLeft
                  color='#FFFFFF'
                  fontSize='25px'
                />
              </button>
            
            </ul> 
          </div>
        </section>
        
      </Main>

      <Footer/>
    </Container>
  )
}