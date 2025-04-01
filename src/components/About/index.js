import './index.css'

const About = () => (
  <section className="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am a dedicated Full Stack Developer with hands-on experience in
          designing and developing modern web applications. Trained in both
          frontend and backend technologies, I specialize in creating
          user-friendly, high-performance applications.
        </p>

        <h3>My Journey</h3>
        <p>
          After completing my training as a Full Stack Developer, I have worked
          on multiple projects to sharpen my skills. Through continuous learning
          and practical implementation, I have developed a strong understanding
          of building scalable and efficient web applications.
        </p>

        <h3>Tech Stack & Skills</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQLite</li>
          <li>React Hooks</li>
          <li>Fundamental Python</li>
          <li>AWS Core Concepts</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Certifications</h3>
        <p>
          I have completed certifications in Full Stack Development, enhancing
          my expertise in frontend and backend technologies, database
          management, and web application security.
        </p>

        <h3>Learning & Future Goals</h3>
        <p>
          Currently, I am focusing on optimizing backend performance and
          expanding my knowledge in cloud deployment and system architecture. My
          goal is to develop scalable applications that provide seamless user
          experiences.
        </p>

        <h3>Projects</h3>
        <p>
          I have built various projects that demonstrate my ability to develop
          full-stack applications. Check out my latest work in the
          <a href="/projects" className="link">
            {' '}
            Projects
          </a>{' '}
          section.
        </p>

        <a href="/contact" className="btn">
          Let's Connect
        </a>
      </div>
    </div>
  </section>
)

export default About
