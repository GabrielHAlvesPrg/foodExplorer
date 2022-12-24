import { Container } from './styles'

export function Input({border = false, icon: Icon, ...rest}){
  return(
    <Container
      border={
        border
      }
    >
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  )
}