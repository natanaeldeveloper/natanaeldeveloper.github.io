import { FlagOutlined, CodeOutlined } from "@ant-design/icons"
import { cilHandshake } from "@coreui/icons"
import CIcon from "@coreui/icons-react"

import { Box, Container, Content, Icon, Text } from "./style"

const SoftSkills: React.FC = () => {
  return (
    <Container>
      <Content>
        <Box>
          <Icon>
          <FlagOutlined />
          </Icon>
          <Text>
            <h2>Iniciativa e comprometimento</h2>
            <p>Se há um problema a ser resolvido,
              não espero muito para resolve-lo.
              O que desenvolvo, o faço como se fosse
              para mim mesmo.</p>
          </Text>
        </Box>
        <Box>
          <Icon>
            <CodeOutlined />
          </Icon>
          <Text>
            <h2>Código limpo</h2>
            <p>Busco implementar um código objetivo
              e auto-descritivo, Gosto de refatorar
              quando descubro soluções mais eficiêntes.</p>
          </Text>
        </Box>
        <Box>
          <Icon>
            <CIcon style={{ padding: 16 }} icon={cilHandshake} />
          </Icon>
          <Text>
            <h2>Bom relacionamento</h2>
            <p>Busco ao máximo evitar conflitos e manter 
              um ambiente de trabalho agradável para mim e minha 
              equipe de trabalho.</p>
          </Text>
        </Box>
      </Content>
    </Container>
  )
}

export default SoftSkills