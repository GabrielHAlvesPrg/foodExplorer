import { Container, Main } from "./styles"

import logoImg from '../../assets/Polygon.svg'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp(){
  return (
    <Container>    
      <img src={logoImg} alt="Logo" />  
      <h1>food explorer</h1>
    
    <Main>
      <div className="content">
        <h1>Crie sua conta</h1>

        <div className="input">
          <label className="label">Seu nome</label>
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            border
          />
        </div>

        <div className="input">
          <label className="label">Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            border
          />
        </div>

        <div className="input">
          <label className="label">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            border
          />
        </div>
         
        <Button
          title={"Criar conta"}
        />   

        <a href="">Já tenho uma conta</a>       

      </div>
    </Main>

    </Container>
  )
}
