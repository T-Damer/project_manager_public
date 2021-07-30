import User from 'models/User'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Dispatch } from 'redux'
import { signUp } from 'store/actions/authActions'

class SingUp extends Component<any, any> {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  handleSubmit = (event: any) => {
    event.preventDefault() // Prevents refresh
    this.props.signUp(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : undefined}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (newUser: User) => dispatch(signUp(newUser) as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp) as any
