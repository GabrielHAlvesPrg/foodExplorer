import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { IoRemove } from 'react-icons/io5'

import { Button } from '../../components/Button';

import saladaRavanelloImg from "../../assets/plates/saladaRavanella.svg";

export function Details(){
  return(
    <Container>
      <Header/>
      
      <button>voltar</button>

      <img src={saladaRavanelloImg} alt="Imagem do prato escolhido" />

      <section>
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>

        <div className='ingredientes'>
          <ul>
            <li>
              <img src="" alt="" />
            </li>

            <li>
              <img src="" alt="" />
            </li>

            <li>
              <img src="" alt="" />
            </li>

            <li>
              <img src="" alt="" />
            </li>
          </ul>

          <h1>R$ </h1>

          <div className='add'>
            <button id='remove'>
              <IoRemove
                className='buttonRemove'
              />
            </button>
            <p> 01 </p>
            <button id='increment'>
            <AiOutlinePlus
              className='buttonAdd'
            />
            </button>
            

            <Button
              id='incluir'
              title="incluir"
            />

          </div>
        </div>
      </section>
      <Footer/>
    </Container>
  )
}