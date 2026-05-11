import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  const projects = [
    {
      title: "Brand Build",
      subtitle: "Interactive Media Personalization Platform",
      tech: "Next.js, Firebase",
      description: "Developed a suite of interactive tools, including a Canva-inspired photo frame editor, a goal-setting and progress-tracking module, and a dynamic business card generator. These features enhanced user engagement, personalization, and productivity, making the platform more versatile and user-centric."
    },
    {
      title: "Employee Management Tracker",
      subtitle: "Cross-Platform Desktop App",
      tech: "Electron, Stealth Mode",
      description: "Built a cross-platform employee productivity tracker using Electron, featuring auto-launch, Stealth Mode, offline support, and a modern, compact UI for seamless background tracking. Added modules for log reporting and feedback, and led regular release cycles to ensure timely updates, performance enhancements, and issue resolution."
    },
    {
      title: "Cognute",
      subtitle: "Real-Time Agent-Customer Communication Platform",
      tech: "React, Websockets, Encryption, Firebase",
      description: "Built a secure, real-time chat application with React, Redux, and WebSockets, featuring encrypted multi-user conversations and a customizable, white-label chat widget with dynamic theming for seamless platform integration."
    },
    {
      title: "Plego",
      subtitle: "AI-Driven Solutions Platform",
      tech: "React, Node, GraphQL, Prisma",
      description: "Delivered full-stack, AI-driven solutions focused on performance and scalability, including real estate opportunity management with AI chat, role-based analytics access, and end-to-end event lifecycle features using React, GraphQL, and Prisma for seamless event and backend management."
    },
    {
      title: "Mantra",
      subtitle: "Project Management Portal",
      tech: "React, TypeScript, Firebase",
      description: "Built an admin portal and user app for project/unit management with real-time dashboards and notifications. Integrated workflows for legal, engineering, and procurement teams to enhance collaboration and transparency."
    },
    {
      title: "StackAI",
      subtitle: "Agentic AI Workflow Platform",
      tech: "SlackAI Framework",
      description: "Built a web app for creating and managing AI agents with API key generation and custom tool-building using SlackAI's framework. Enabled users to query built tools via chat, with real-time workflow graphs and execution logs for monitoring and debugging."
    }
  ]

  const skills = {
    frontend: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Microservices Architecture", "Monorepo Architecture"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    tools: ["Docker", "AWS", "GitHub Actions", "Firebase"],
    ai: ["LangChain", "Pinecone", "OpenAI APIs", "AI Integrations", "Prompt Engineering", "RAG Pipelines", "Vector Databases"]
  }

  const experience = [
    {
      company: "Logicrays Technologies",
      role: "Software Engineer",
      period: "Sep 2023 - Present",
      description: "Leveraged full-stack technologies to develop and optimize interactive features, real-time communication tools, and cross-platform applications, driving enhanced user engagement and performance across projects."
    },
    {
      company: "Logicode Inc",
      role: "React Developer",
      period: "Apr 2023 - Sep 2023",
      description: "Developed and enhanced key features for a product serving international markets, improving functionality and addressing diverse user needs."
    },
    {
      company: "Atharva System",
      role: "Software Engineer",
      period: "Nov 2022 - Mar 2023",
      description: "Developed and optimized ReactJS web applications using advanced performance techniques, collaborating with cross-functional teams to ensure successful product delivery."
    }
  ]

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <img src="/Transparent-ABLogo.png" alt="AB Logo" className="logo-img" />
          </div>
          <div className="nav-links">
            <a onClick={() => scrollToSection('hero')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">hey, i'm</p>
            <h1 className="name">abhishek bhatt</h1>
            <p className="tagline">&gt; Reactronaut</p>
            <p className="subtitle">currently</p>
            <p className="current-role">● Software Engineer at <span className="highlight">LogicRays</span></p>
            <p className="bio">
              A passionate developer crafting modern web experiences with <span className="tech-highlight">React & Next.js</span>, 
              building robust backend solutions with <span className="tech-highlight">Node.js</span>, and creating cross platform 
              applications with <span className="tech-highlight">Electron</span>. Turning coffee into clean code, one commit at a time.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Get In Touch
              </a>
              <a href="https://www.linkedin.com/in/abhishek-bhatt-reactjs/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Results-driven Full Stack Developer with 3.5+ years of experience building scalable web and 
                desktop applications using <strong>React.js, Next.js, Node.js, Electron.js, GraphQL, and TypeScript</strong>. 
                Experienced in developing real-time systems, optimizing application performance, and deploying 
                production-ready applications using Docker and AWS.
              </p>
              <p>
                Skilled in designing maintainable architectures, implementing secure authentication systems, 
                and collaborating with cross-functional teams to deliver high-impact solutions.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  {skills.frontend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  {skills.backend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <h3>Database</h3>
                <div className="skill-tags">
                  {skills.database.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-tags">
                  {skills.tools.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <h3>AI-Assisted Development</h3>
                <div className="skill-tags">
                  {skills.ai.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:bhattabhi3@gmail.com">bhattabhi3@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+919723519232">+91 97235 19232</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/abhishek-bhatt-reactjs/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Abhishek Bhatt. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
