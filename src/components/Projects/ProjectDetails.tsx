import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const ProjectDetails = (props: any) => {
  const { project, auth } = props
  if (!auth.uid) return <Redirect to="/signin" />
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.firstName} {project.lastName}
            </div>
            <div>Date: {moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p className="white-text">Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails) as any
