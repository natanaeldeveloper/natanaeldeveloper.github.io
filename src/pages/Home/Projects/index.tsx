import { useEffect, useState } from "react"
import { Container } from "./style"
import ProjectService, { Project } from "../../../services/ProjectService";


const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  async function handleProjects() {
    const projects = await ProjectService.findAll()
    setProjectList(projects)
  }

  useEffect(() => {
    handleProjects()
  }, [])

  return (
    <Container>
      Projects
    </Container>
  )
}

export default Projects