import { Container, SoftSkillIcon, SoftSkillItem } from "./style"
import { cilChartLine, cilChatBubble, cilGraph } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const SoftSkills: React.FC = () => {
  return (
    <Container>
      <SoftSkillItem>
        <SoftSkillIcon>
          <CIcon icon={cilGraph} />
        </SoftSkillIcon>
        <p>Autogerenciável, com capacidade analítica na resolução de problemas.</p>
      </SoftSkillItem>

      <SoftSkillItem>
        <SoftSkillIcon>
          <CIcon icon={cilChatBubble} />
        </SoftSkillIcon>
        <p>Bom relacionamento interpessoal, comunicação e colaboração no trabalho em equipe.</p>
      </SoftSkillItem>

      <SoftSkillItem>
        <SoftSkillIcon>
          <CIcon icon={cilChartLine} />
        </SoftSkillIcon>
        <p>Focado na entrega de projetos funcionais e escaláveis a nível sistema.</p>
      </SoftSkillItem>
    </Container>
  )
}

export default SoftSkills