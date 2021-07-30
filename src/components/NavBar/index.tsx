import { FC } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar: FC = (props: any) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="mainLogo">
          project_manager
        </Link>
        {props.auth.uid ? (
          <SignedInLinks profile={props.profile} />
        ) : (
          <SignedOutLinks />
        )}
      </div>
    </nav>
  )
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(NavBar)
