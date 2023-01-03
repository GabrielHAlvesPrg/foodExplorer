import {Container, Main } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import statusRedImg from '../../assets/status/statusRed.svg';
import statusYellowImg from '../../assets/status/statusYellow.svg';
import statusGreenImg from '../../assets/status/statusGreen.svg';
export function Requests(){
  return(
    <Container>
      <Header/>

      <Main>
        <h1>Pedidos</h1>

        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='status'>
                <img src={statusRedImg} alt="circulo colorido, representando o status do pedido" />
                Pendente
              </td>
              <td className='codigo'>
                0000004
              </td>
              <td className='detalhamento'>
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá
              </td>
              <td className='data-hora'>
                03/01 - 12:15
              </td>
            </tr>

            <tr>
              <td className='status'>
              <img src={statusYellowImg} alt="circulo colorido, representando o status do pedido" />
                Preparando
              </td>
              <td className='codigo'>
                0000003
              </td>
              <td className='detalhamento'>
                1x - Macarronada
              </td>
              <td className='data-hora'>
                03/01 - 11:30
              </td>
            </tr>

            <tr>
              <td className='status'>
              <img src={statusGreenImg} alt="circulo colorido, representando o status do pedido" />
                Concluído
              </td>
              <td className='codigo'>
                0000002
              </td>
              <td className='detalhamento'>
                3x - Panqueca
              </td>
              <td className='data-hora'>
                03/01 - 11:30
              </td>
            </tr>

            <tr>
              <td className='status'>
              <img src={statusGreenImg} alt="circulo colorido, representando o status do pedido" />
                Concluído
              </td>
              <td className='codigo'>
                0000001
              </td>
              <td className='detalhamento'>
                1x - Panqueca
              </td>
              <td className='data-hora'>
                03/01 - 11:30
              </td>
            </tr>
          </tbody>
        </table>
      </Main>

      
  
      <Footer/>
    </Container>
  )
}