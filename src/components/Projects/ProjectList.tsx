import { Link } from 'react-router-dom'
import ProjectSummary from 'components/Projects/ProjectSummary'
import Project from 'models/Project'

const ProjectList = ({ projects }: any) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project: Project) => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          )
        })}
    </div>
  )
}

export default ProjectList
