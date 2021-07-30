import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import createProject from 'store/actions/projectActions'
import Project from 'models/Project'

class CreateProject extends Component<any, any> {
  state = {
    title: '',
    content: '',
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault() // Prevents refresh
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <button className="btn pink lighten-1">Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { auth: state.firebase.auth }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createProject: (project: Project) => dispatch(createProject(project)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject) as any
