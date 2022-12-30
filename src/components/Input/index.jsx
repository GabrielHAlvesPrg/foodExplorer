import { Container } from './styles'

export function Input({background = false, border = false, icon: Icon, ...rest}){
  return(
    <Container
      border={
        border
      }
      background={
        background
      }
    >
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  )
}