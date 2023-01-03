import { Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import arrowLeft from '../../assets/arrowLeft.svg';

import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import { IoRemove } from 'react-icons/io5'

import { Button } from '../../components/Button';

import saladaRavanelloImg from "../../assets/plates/saladaRavanella.svg";
import paoNaanImg from "../../assets/Ingredients/paoNaanImg.svg";
import alfaceImg from "../../assets/Ingredients/alfaceImg.svg";
import rabaneteImg from "../../assets/Ingredients/rabaneteImg.svg";
import tomateImg from "../../assets/Ingredients/tomateImg.svg"

export function Details(){
  return(
    <Container>
      <Header/>
      
        <div id='btnComeBack'>
          <button className='voltar'>
            <img src={arrowLeft} alt="ícone de seta para a esquerda" />
            voltar
          </button>

        </div>
      <Main>

        <div>
          <img className='plateImg' src={saladaRavanelloImg} alt="Imagem do prato escolhido" />
        </div>

        <section className='sectionDetails'>
          <h1 className='title'>
            Salada Ravanello
          </h1>

          <p className='description'>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <div className='ingredients'>
            <ul>
              <li>
                <img src={alfaceImg} alt="" />
                <p>alface</p>
              </li>

              <li>
                <img src={tomateImg} alt="" />
                <p>tomate</p>
              </li>

              <li>
                <img src={rabaneteImg} alt="" />
                <p>rabanete</p>
              </li>

              <li>
                <img src={paoNaanImg} alt="" />
                <p>pão naan</p>
              </li>
            </ul>
          </div>

          <div className='price-quantity-button'>

            <h2>R$ 25,97</h2>

            <div className='add'>

              <div className='btnRemove-btnIncrement'>

                <button id='remove'>
                  <IoRemove
                    className='buttonRemove'
                    size={27}
                  />
                </button>

                <p className='quantity'>
                  01 
                </p>

                <button id='increment'>
                  <AiOutlinePlus
                    className='buttonAdd'
                    size={27}
                  />
                </button>

              </div>

              <Button
                id='include'
                title="incluir"
              />

            </div>
           
          </div>
          
        </section>

      </Main>
      
      <Footer/>
    </Container>
  )
}