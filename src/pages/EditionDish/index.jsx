import { Container, Main} from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';

import arrowLeft from '../../assets/arrowLeft.svg';

export function EditionDish(){
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
        
        <h1>Editar prato</h1>

        <section className='introduction'>
          <button>Selecionar imagem</button>

          <div className="input">
            <label className="label">Nome</label>
            <Input
              placeholder="Exemplo: Salada Caesar"
              type="text"
              border
            />
          </div>
        </section>

        <section className='ingredientes-preco'>
          <div className="input">
            <label className="label">Ingredientes</label>
            <Input
              placeholder=""
              type="text"
              border
            />
          </div>

          <div className="input">
            <label className="label">Preço</label>
            <Input
              placeholder="R$: 00,00"
              type="text"
              border
            />
          </div>
        </section>
        
        <section className='descricao'>
          <label htmlFor="">Descrição</label>
          <textarea name="descricao" id="" cols="30" rows="10"></textarea>
        </section>

        <button>Adicionar prato</button>

        

      </Main>
      <Footer/>
    </Container>
  )
}