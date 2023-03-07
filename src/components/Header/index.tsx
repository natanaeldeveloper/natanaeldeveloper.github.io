import { WhatsAppOutlined, CoffeeOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { Container, TextBox, Button, ButtonBudget, ButtonJobOffer } from "./style"

const Header = () => {
  return (
    <Container>
      <TextBox>
        <h1>Natanael Oliveira</h1>
        <h3>Analista e Desenvolvedor de Sistemas</h3>
        <h4>Web Developer | Full-Stack</h4>
        <Space>
          <Button className={ButtonBudget()}>
            <WhatsAppOutlined />
            <span>Fazer orçamento</span>
          </Button>
          <Button className={ButtonJobOffer()}>
            <span>Recrutar</span>
            <CoffeeOutlined />
          </Button>
        </Space>
      </TextBox>
    </Container>
  )
}

export default Header