import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import FunFactsPopup from '../FunFact'

const certificates = [
  {
    title: 'React JS',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743673501/ReactJS_yz5dzx.jpg',
  },
  {
    title: 'Node JS',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743673518/NodeJS_pdgcw6.jpg',
  },
  {
    title: 'Java Script Essentials',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743673529/JavascriptEssentials_g5xb5h.jpg',
  },
  {
    title: 'Python Programming',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743673565/FoundationsWithPython_brh2lo.jpg',
  },
  {
    title: 'MySQL',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743673538/IntroductionToDatabases_g2zytd.jpg',
  },
  {
    title: 'Bootstrap & Flexbox',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743676263/ResponsiveWebsite_lqvqd0.jpg',
  },
  {
    title: 'Static Website',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743676361/StaticWebsite_etbv3r.jpg',
  },
  {
    title: 'Dynamic Website',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743676245/DynamicWebsite_wk7nyz.jpg',
  },
  {
    title: 'Git & CLI',
    image:
      'https://res.cloudinary.com/djan3q2wv/image/upload/v1743676459/DeveloperFoundation_wtnoyg.jpg',
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

const About = () => (
  <section className="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am an enthusiastic Full Stack Developer with practical experience in
          crafting efficient, scalable, and interactive web applications.
          Skilled in front-end development using React, I design visually
          appealing and user-friendly interfaces, while utilizing Node.js with
          Express framework, and MySQL to develop robust back-end systems. I
          also apply Python for logic building and automation. With a strong
          grasp of AWS core concepts and proficiency in Git for version control,
          I ensure seamless collaboration and code management. My passion for
          problem-solving and innovation drives me to stay updated with emerging
          technologies, allowing me to create impactful and future-ready digital
          solutions.
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
          <li>Git</li>
        </ul>

        <h3>Certifications</h3>
        <p>
          Successfully completed Full Stack Development training at NXT Wave,
          where I gained in-depth knowledge and hands-on experience in
          designing, developing, and deploying dynamic web applications. This
          rigorous program equipped me with industry-relevant skills, best
          coding practices, and problem-solving abilities essential for building
          scalable, high-performance digital solutions. Through real-world
          projects and practical implementation, I honed my expertise in modern
          development methodologies, preparing me to excel in the ever-evolving
          tech landscape
        </p>

        <div className="certificates">
          <Slider {...settings}>
            {certificates.map(eachCopy => (
              <div key={new Date()} className="project-slide">
                <img
                  src={eachCopy.image}
                  alt={eachCopy.title}
                  className="certificate-image"
                />
                <h4>{eachCopy.title}</h4>
              </div>
            ))}
          </Slider>
        </div>

        <h3>Learning & Future Goals</h3>
        <p>
          I am dedicated to advancing my expertise in full-stack development,
          delving into modern frameworks, cloud computing, and scalable
          architectures to craft <b>high-performance applications</b>. Expanding
          my proficiency in AWS services, system design, and{' '}
          <b>backend optimization</b>, I strive to enhance efficiency and
          reliability in web solutions. Additionally, I aim to contribute to
          open-source initiatives, collaborate with industry professionals, and
          stay at the forefront of emerging technologies like <b>AI-driven</b>{' '}
          development and DevOps. With a passion for continuous learning and
          innovation, I am committed to evolving as a versatile developer,
          creating cutting-edge, <b>future-ready digital solutions</b>.
        </p>

        <h3>Projects</h3>
        <p>
          I have built various projects that demonstrate my ability and skills
          in developing Web applications. Check out my latest work in the{' '}
          <a href="/projects" className="link">
            <b>Projects</b>
          </a>{' '}
          section.
        </p>

        <div className="funfactlogo">
          <a href="/contact" className="btn letsconnect">
            Let&apos;s Connect
          </a>
          <FunFactsPopup />
        </div>
      </div>
    </div>
  </section>
)

export default About
