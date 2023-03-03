import data from '../data/skills.json'

const About = () => {
  return (
    <section className="about" id="about">
      <h3>Skills</h3>
      <div className="categories">
        {data.map((column) => (
          <div className="col" key={column.category}>
            <div className="category">{column.category}</div>
            <ul className='tech-list'>
              {column.tech.map((item) => (
                <li key={item.name}><img src={item.logo} className='tech-logo'/></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About