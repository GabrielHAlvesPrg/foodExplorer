import { Container, Main } from './styles';

import { AiOutlineHeart } from 'react-icons/ai';

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

        <h2>{title}</h2>

        <p>{description}</p>

        <h1>R$ {price}</h1>

        <div className='add'>
          <button id='remove'>
            <img src={subtractionImg} alt="botão para retirar uma unidade do prato, do carrinho de compras" />
          </button>
          <p> 01 </p>
          <button id='increment'>
          <img src={additionImg} alt="botão para adicionar uma unidade do prato, do carrinho de compras" />
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