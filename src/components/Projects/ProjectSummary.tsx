import { FC } from 'react'
import moment from 'moment'

// There's should be a better way than <any>
const ProjectSummary: FC<any> = ({ project }: any) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.firstName} {project.lastName}
        </p>
        <p className="grey-text">
          Date: {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  )
}

export default ProjectSummary
