import api from "./api"

const ProjectService = {
  findAll: async () => {
    const response = await api.get('projects')
    return response.data
  }
}

export default ProjectService