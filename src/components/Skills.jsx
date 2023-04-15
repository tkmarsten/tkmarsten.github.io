import data from "../data/skills.json"

const Skills = () => {
  return (
    <section className="about" id="about">
      <h3>Skills</h3>
      {data.map((column) => (
        <div className='category'>
          <div className="category-name">{column.category}</div>
          <div className="skill-col" key={column.category}>
            {column.tech.map((item) => (
              <img src={item.logo} key={item.name} className="skill-logo" />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
