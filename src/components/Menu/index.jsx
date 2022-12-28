import { Container, Main } from './styles';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { IoRemove } from 'react-icons/io5'


import heartImg from '../../assets/heart.svg';
import heartSelectedImg from '../../assets/heartSelected.svg';
import additionImg from '../../assets/addition.svg';
import subtractionImg from '../../assets/subtraction.svg';

import { Button } from '../../components/Button';

export function Menu({ img, title, description, price, ...rest}){
  return (
    <Container>
      <Main>
        <button
          className='favorite'
          onClick={(e) => {console.log(e)}}
        >
          <img src={heartImg} alt="Imagem do botão para favoritar o prato" />
        </button>

        <img src={img} alt="Imagem do prato" className='pratoImg'/>

        <button>
          {title} 
          <AiOutlineRight
            className='teste'
            
          />
        </button>
        
        <h3>{description}</h3>

        <h1>R$ {price}</h1>

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

      </Main>
    </Container>
  )
}