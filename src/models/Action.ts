import Project from 'models/Project'

interface Action {
  type?: string
  project?: Project
  error?: Error
}

export default Action
