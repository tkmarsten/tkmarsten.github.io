import { FiGithub, FiExternalLink } from "react-icons/fi";

const Project = ({ name, description, tech, github, url, image }) => {
  console.log(image)

  const style = {
    backgroundImage: `url("img/${image}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'contain',
    objectPosition: '50% 50%',
    position: 'relative',
    isolation: 'isolate',
    padding: '1rem',
  }

  return (
    <div className="project-wrapper">
      <div className="project-info" style={style}>
        <div className="project-title">{name}</div>
        <div className="project-description">{description}</div>
        <div className="project-chips">
          {tech.map((item) => (
            <span key={item} className="project-chip">{item}</span>
          ))}
        </div>
        <div className="project-links">
          {github &&
            <a href={github} className='fancy-link' target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          }
          {url &&
            <a href={url} className='fancy-link' target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Project