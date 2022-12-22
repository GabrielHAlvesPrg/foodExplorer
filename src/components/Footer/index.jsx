import { Container, Main } from './styles';

import logoImg from '../../assets/PolygonFooter.svg';
import subtitleImg from '../../assets/Subtitle.svg';

export function Footer(){
  return (
    <Container>
      <Main>
        <div>
          <img src={logoImg} alt="Logotipo"/>
          <h1>food explorer</h1>
        </div>

        <img src={subtitleImg} alt="2022 - Todos os direitos reservados." className='subtitle' />
      </Main>
    </Container>
  )
}