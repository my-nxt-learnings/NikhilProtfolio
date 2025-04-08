import './index.css'

const projects = [
  {
    title: 'Notes App',
    description:
      'Full-stack notes app built using React, Node.js wit Express framework, and SQLite.',
    link: 'https://my-notes-app-frontend.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/MyNotesAppFrontend',
  },
  {
    title: 'Vidnest',
    description:
      'An application similar to video streaming platforms like youtube',
    link: 'https://vidnest-two.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/Vidnest',
  },
  {
    title: 'Estore',
    description:
      'A secure E-Commerce application with user authentication, product filtering, cart management, and seamless checkout, ensuring a smooth and efficient shopping experience.',
    link: 'https://estore-wine.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/EnhancedEstore',
  },
  {
    title: 'Job Hive',
    description: 'A responsive application to search jobs.',
    link: 'https://job-hive-two.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/JobHive',
  },

  {
    title: 'Movie Nest App',
    description:
      'App that showcases essential information, including plot, cast, and ratings, for a diverse range of films.',
    link: 'https://movie-nest-app.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/MovieNestApp',
  },
  {
    title: 'Food Hub',
    description:
      'This responsive application, a clone of Swiggy and Zomato, features browsing menus, adding items to the cart, and placing orders, all while ensuring a seamless user experience across devices.',
    link: 'https://food-hub-roan.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/FoodHub',
  },
  {
    title: 'IPLBuzz',
    description:
      'This IPL app provides detailed information about teams, match results, statistics on matches played, wins, and other key data, offering a comprehensive view of the ongoing and past IPL seasons.',
    link: 'https://ip-lbuzz.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/IPLbuzz',
  },
  {
    title: 'Notes(React Hooks)',
    description:
      'Using React hooks(useState, useEffect) developed an simple notes application',
    link: 'https://niknotesrhooks.ccbp.tech',
    gitlink: 'https://github.com/my-nxt-learnings/Notes-ReactHooks',
  },
  {
    title: 'Color Burst',
    description:
      'This Holi-themed application lets users click colorful balls to increase their score, creating a fun and interactive experience that celebrates the vibrant festival with dynamic gameplay.',
    link: 'https://holi-challenge.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/HoliChallenge',
  },
  {
    title: 'Gradient Generator',
    description:
      'A Gradient Generator built with styled-components, allowing users to create custom gradients by selecting colors, adjusting direction, and generating CSS code instantly. ',
    link: 'https://gradient-generator-styled-components.vercel.app',
    gitlink:
      'https://github.com/my-nxt-learnings/GradientGenerator-StyledComponents-',
  },
  {
    title: 'Text Editor',
    description:
      'A text editor application focused mainly on dynamic styling using styled components(CSS in JS)',
    link: 'https://text-editor-ten-eta.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/TextEditor',
  },
  {
    title: 'Suno Music',
    description:
      'A simple music application built to gain good experince over working with lists',
    link: 'https://suno-music-alpha.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/SunoMusic',
  },
  {
    title: 'Stop Watch',
    description:
      'A Stopwatch Application built to demonstrate timing functions, utilizing setInterval and clearInterval for accurate time tracking, start, pause, and reset functionalities.',
    link: 'https://mystopwatch846.ccbp.tech/',
    gitlink: 'https://github.com/my-nxt-learnings/StopWatch-TimingFunctions-',
  },
  {
    title: 'Emoji Game',
    description:
      'An interactive Emoji Game focusing on list handling and conditional rendering, where players select unique emojis while scores update dynamically. ',
    link: 'https://emoji-game-ashen.vercel.app',
    gitlink: 'https://github.com/my-nxt-learnings/EmojiGame',
  },
  {
    title: 'Rock Paper Scissors',
    description:
      'Used conditional rendering and reactjs-popup to built this application',
    link: 'https://rock-paper-scissors-umber-gamma.vercel.app/',
    gitlink: 'https://github.com/my-nxt-learnings/RockPaperScissors',
  },
]

const Projects = () => (
  <section className="projects">
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div className="project-card" key={new Date()}>
            <h3>{project.title}</h3>
            <p title={project.description}>
              {project.description.slice(0, 65)}
              <span>...</span>
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
            <a
              href={project.gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
