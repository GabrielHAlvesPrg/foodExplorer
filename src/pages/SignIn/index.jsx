import { Container, Main } from "./styles"

import logoImg from '../../assets/Polygon.svg'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn(){
  return (
    <Container>    
      <img src={logoImg} alt="Logotipo" />  
      <h1>food explorer</h1>
    
    <Main>
      <div className="content">
        <h1>Faça login</h1>

        <div className="input">
          <label className="label">Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
        </div>

        <div className="input">
          <label className="label">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
        </div>
         
        <Button
          title={"Entrar"}
        />   

        <a href="">Crie uma conta</a>       

      </div>
    </Main>

    </Container>
  )
}
