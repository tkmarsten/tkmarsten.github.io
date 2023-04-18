import data from '../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className="projects">
      <h3>Select Projects</h3>
      {data.map((project) => (
        <ProjectCard key={project.name} name={project.name} description={project.description} tech={project.tech} github={project.github} url={project.url} image={project.image} />
      ))}
    </section>
  )
}

export default Projects