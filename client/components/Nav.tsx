import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/signup/step1">Sign up</Link>
      </nav>
    </div>
  )
}

export default Nav
