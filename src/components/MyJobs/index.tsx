import { Button, Modal, Segmented, Space } from "antd"
import { useState } from "react"
import { Container, Content, JobCard } from "./style"


const MyJobs: React.FC = () => {

  const [projects, setProjects] = useState([
    { name: 'sistema de vendas' },
    { name: 'site avaliações diagnósticas' },
    { name: 'bloco de notas' },
    { name: 'sistema de estoque' },
    { name: 'Notepad' },
    { name: 'SAGE' },
  ])

  const [MenuValue, setMenuValue] = useState<string | number>('All')

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Space style={{ marginBottom: '2rem' }}>
        <Segmented size="large" options={['Todos', 'Sites', 'Sistemas', 'UI/UX']} value={MenuValue} onChange={setMenuValue} />
      </Space>
      <Content>
        {projects.map(item => (
          <JobCard onClick={showModal}>
            {item.name}
          </JobCard>
        ))}
      </Content>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={[
          <Button key="back" onClick={handleCancel}>Fechar</Button>,
          <Button key="demo" type="primary">Demo</Button>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Container>
  )
}

export default MyJobs