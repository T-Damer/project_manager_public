import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from 'store/actions/authActions'
import { Dispatch } from 'redux'

const SignedInLinks = (props: any) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">+</NavLink>
      </li>
      <li>
        <a href="/signin" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signOut: () => dispatch(signOut() as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
