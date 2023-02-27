import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ name, description, tech, github, url, image }) => {
  console.log(image)

  const style = {
    backgroundImage: `url("img/${image}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    position: 'relative',
    isolation: 'isolate',
    padding: '1rem'
  }

  return (
    <div className="proj-wrapper">
      <div className="proj-info" style={style}>
        <div className="proj-title">{name}</div>
        <div className="proj-description">{description}</div>
        <div className="proj-chips">
          {tech.map((item) => (
            <span key={item} className="proj-chip">{item}</span>
          ))}
        </div>
        <div className="proj-links">
          {github &&
            <a href={github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          }
          {url &&
            <a href={url} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard