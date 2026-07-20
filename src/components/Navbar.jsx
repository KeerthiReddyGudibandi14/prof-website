import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">CIOP Lab</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/research">Research</Link>
        <Link to="/team">Team</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/editorial-work">Journal Work</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  )
}

export default Navbar