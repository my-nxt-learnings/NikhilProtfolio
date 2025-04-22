import './index.css'
import {FaDownload, FaProjectDiagram} from 'react-icons/fa' // Import icons

const Home = () => (
  <section className="home">
    <div className="home-content">
      <img
        src="https://res.cloudinary.com/djan3q2wv/image/upload/v1743571062/DSC_1522-01_zxn9z7.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="name">Nikhil Galala</h2>
      <h2>Passionate About Development | Driven by Innovation</h2>
      <p className="description">
        I am a trained Full Stack Developer with hands-on experience gained through
        extensive training in building dynamic and responsive web applications.
        Proficient in HTML, CSS, and JavaScript, I specialize in front-end development
        using React and Bootstrap, while managing back-end services with Node.js and
        the Express framework. I work with MySQL for database management and leverage
        Python for building logic. Additionally, I have a conceptual understanding of
        AWS core concepts and utilize Git for efficient version control and
        collaboration.
      </p>
      <div className="btn-container">
        <a href="/projects" className="butn view-btn">
          <FaProjectDiagram className="btn-icon" /> View My Projects
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1hDyNo9rNsSxJ2s0Mw_RBq9h8Ai0M9zRN"
          className="butn download-btn"
          download
        >
          <FaDownload className="btn-icon" /> Download Resume
        </a>
      </div>
    </div>
  </section>
)

export default Home
