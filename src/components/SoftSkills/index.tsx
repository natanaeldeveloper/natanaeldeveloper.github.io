import { Container, SoftSkillItem } from "./style"
import { cibCodesandbox } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const SoftSkills: React.FC = () => {
  return (
    <Container>
      <SoftSkillItem>
        <CIcon icon={cibCodesandbox} />
        <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed aliquam vel nisl ut
          fermentum. In laoreet, enim in placerat
          lobortis, ipsum ligula blandit augue, a
          molestie quam orci et metus.</p>
      </SoftSkillItem>

      <SoftSkillItem>
        <CIcon icon={cibCodesandbox} />

        <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed aliquam vel nisl ut
          fermentum. In laoreet, enim in placerat
          lobortis, ipsum ligula blandit augue, a
          molestie quam orci et metus.</p>
      </SoftSkillItem>

      <SoftSkillItem>
        <CIcon icon={cibCodesandbox} />

        <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed aliquam vel nisl ut
          fermentum. In laoreet, enim in placerat
          lobortis, ipsum ligula blandit augue, a
          molestie quam orci et metus.</p>
      </SoftSkillItem>
    </Container>
  )
}

export default SoftSkills