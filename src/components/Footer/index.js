import './index.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsTriangleFill} from 'react-icons/bs'

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    <div className="footer-icons">
      <a
        href="https://github.com/my-nxt-learnings"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nikhil-g-50166235a"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://vercel.com/nikhils-projects-0c983374"
        target="_blank"
        rel="noopener noreferrer"
        title="Vercel"
      >
        <BsTriangleFill />
      </a>
    </div>
  </footer>
)

export default Footer
