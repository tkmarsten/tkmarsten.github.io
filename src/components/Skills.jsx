import data from '../data/skills.json'

const Skills = () => {
  return (
    <section className="skills" id="skill">
      <h3>Skills</h3>
      <div className="categories">
        {data.map((categories) => (
          <div className="col" key={categories.category}>
            <div className="category">{categories.category}</div>
            <ul>
              {categories.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills