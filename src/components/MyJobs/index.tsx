import { Button, Modal, Segmented, Space } from "antd"
import { useState } from "react"
import { Container, Content, JobCard, ModalClass } from "./style"


const MyJobs: React.FC = () => {

  const [projects, setProjects] = useState([
    { name: 'sistema de vendas', imageURL: 'https://blog.rocketseat.com.br/content/images/2020/07/ideias-inspiracoes-projetos-design-web-mobile.png' },
    // { name: 'site avaliações diagnósticas' },
    // { name: 'bloco de notas' },
    // { name: 'sistema de estoque' },
    // { name: 'Notepad' },
    // { name: 'SAGE' },
  ])

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
      <Content>
        {projects.map((item, key) => (
          <JobCard onClick={showModal} key={key}>
            <img src={item.imageURL} />
          </JobCard>
        ))}
      </Content>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={ModalClass()}
        width={800}
        footer={[
          <Button key="back" onClick={handleCancel}>Fechar</Button>,
          <Button key="demo" type="primary">Demo</Button>
        ]}
      >
        <img src={projects[0].imageURL} />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Container>
  )
}

export default MyJobs