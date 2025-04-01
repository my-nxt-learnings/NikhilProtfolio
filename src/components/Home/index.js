import './index.css'

const Home = () => (
  <section className="home">
    <div className="home-content">
      <img
        src="https://res.cloudinary.com/djan3q2wv/image/upload/v1743425021/WhatsApp_Image_2025-03-31_at_6.13.02_PM_s4p2du.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h1 className="name">Nikhil Galala</h1>
      <h2>Welcome to My Portfolio</h2>
      <p>
        I am a dedicated Full Stack Developer with a profound expertise in
        architecting dynamic, responsive web applications. With hands-on
        experience in React, Node.js utilizing the Express framework, MySQL,
        HTML, CSS, and Python, I engineer innovative solutions that are not only
        highly functional but also seamlessly intuitive and user-centric.
      </p>
      <a href="/projects" className="btn">
        View My Projects
      </a>
    </div>
  </section>
)

export default Home
