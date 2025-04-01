import './index.css'

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">My Portfolio</h1>
    <ul className="navbar-links">
      <li>
        <a href="/" className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="/projects" className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>
)

export default Navbar
