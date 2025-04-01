import './index.css'
import {FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    <div className="footer-icons">
      <a
        href="https://github.com/my-nxt-learnings"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </div>
  </footer>
)

export default Footer
