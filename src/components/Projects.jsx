import data from '../data/projects.json'
import Project from './ProjectCard'

const Projects = () => {
  return (
    <section className="projects" id="project">
      <h3>Projects</h3>
      {data.map((project) => (
        <Project key={project.name} name={project.name} description={project.description} tech={project.tech} github={project.github} url={project.url} image={project.image} />
      ))}
    </section>
  )
}

export default Projects