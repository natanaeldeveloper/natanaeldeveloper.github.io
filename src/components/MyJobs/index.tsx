import { Segmented, Space } from "antd"
import { useState } from "react"
import { Container, Content, JobCard } from "./style"

const MyJobs: React.FC = () => {

  const [projects, setProjects] = useState([
    { name: 'sistema de vendas' },
    { name: 'site avaliações diagnósticas' },
    { name: 'bloco de notas' },
    { name: 'sistema de estoque' },
  ])

  const [MenuValue, setMenuValue] = useState<string | number>('All')

  return (
    <Container>
      <Space style={{ marginBottom: '2rem' }}>
        <Segmented size="large" options={['Todos', 'Sites', 'Sistemas', 'UI/UX']} value={MenuValue} onChange={setMenuValue} />
      </Space>
      <Content>
        {projects.map(item => (
          <JobCard>
            {item.name}
          </JobCard>
        ))}
      </Content>
    </Container>
  )
}

export default MyJobs