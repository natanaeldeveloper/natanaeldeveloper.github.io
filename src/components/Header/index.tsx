import { WhatsAppOutlined, CoffeeOutlined } from '@ant-design/icons'
import { Container, TextArea, Button, ButtonBudget, ButtonJobOffer, ButtonArea } from "./style"

const Header = () => {
  return (
    <Container>
      <TextArea>
        <h1>Natanael Oliveira</h1>
        <h3>Analista e Desenvolvedor de Sistemas</h3>
        <h4>Web Developer | Full-Stack</h4>
        <ButtonArea>
          <Button className={ButtonBudget()}>
            <WhatsAppOutlined />
            <span>Fazer orçamento</span>
          </Button>
          <Button className={ButtonJobOffer()}>
            <span>Recrutar</span>
            <CoffeeOutlined />
          </Button>
        </ButtonArea>
      </TextArea>
    </Container>
  )
}

export default Header