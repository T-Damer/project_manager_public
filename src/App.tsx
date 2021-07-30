import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Components
import NavBar from 'components/NavBar'
import Dashboard from 'components/Dashboard'
import ProjectDetails from 'components/Projects/ProjectDetails'
import CreateProject from 'components/Projects/CreateProject'
import SignIn from 'components/Auth/SignIn'
import SignUp from 'components/Auth/SignUp'
import NotFound from 'components/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateProject} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/404" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
