import { PieChartOutlined, LineChartOutlined, ApartmentOutlined } from "@ant-design/icons"
import { Box, Container, Content, Icon, Text } from "./style"

const SoftSkills: React.FC = () => {
  return (
    <Container>
      <Content>
        <Box>
          <Icon>
            <PieChartOutlined />
          </Icon>
          <Text>
            <h1>Regerenciamento</h1>
            <p>Descrição sobre essa soft skill
              Descrição sobre essa soft skill
              Descrição sobre essa soft skill
            </p>
          </Text>
        </Box>
        <Box>
          <Icon>
            <LineChartOutlined />
          </Icon>
          <Text>
            <h1>Regerenciamento</h1>
            <p>Descrição sobre essa soft skill
              o sobre essa soft skill
              Descrição sobre ess
            </p>
          </Text>
        </Box>
        <Box>
          <Icon>
            <ApartmentOutlined />
          </Icon>
          <Text>
            <h1>Regerenciamento</h1>
            <p>Descrição sobre essa soft skill
              o sobre essa soft skill
              Descrição sobre ess
            </p>
          </Text>
        </Box>
      </Content>
    </Container>
  )
}

export default SoftSkills