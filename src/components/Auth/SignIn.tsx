import Credentials from 'models/Credentials'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Dispatch } from 'redux'
import { signIn } from 'store/actions/authActions'

class SignIn extends Component<any, any> {
  state = {
    email: '',
    password: '',
  }
  handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  handleSubmit = (event: any) => {
    event.preventDefault() // Prevents refresh
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          {authError ? (
            <div className="red-text center">
              <p>{authError}</p>
            </div>
          ) : undefined}
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
    signIn: (credentials: Credentials) => dispatch(signIn(credentials) as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) as any
