import data from "../data/skills.json"

const About = () => {
  return (
    <section className="about" id="about">
      <h3>Education</h3>
      <ul>
        <li>
          <h4>University of Washington</h4>
          <p>Certificate, Full Stack Web Developer</p>
          <p>Sept 2022 - Dec 2022</p>
        </li>
        <li>
          <h4>University of Washington Tacoma</h4>
          <p>Bachelor of Science, Computer Sciences and Systems, 3.6 GPA</p>
          <p>Sept 2019 - June 2021</p>
        </li>
        <li>
          <h4>Highline College</h4>
          <p>Associate Arts, Emphasis in Computer Science</p>
          <p>Sept 2016 - Mar 2019</p>
        </li>
      </ul>


      <h3>Skills</h3>
      {data.map((column) => (
        <>
          <div className="category">{column.category}</div>
          <div className="skill-col" key={column.category}>
            <ul className="tech-list">
              {column.tech.map((item) => (
                <li key={item.name}>
                  <img src={item.logo} className="tech-logo" />
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </section>
  )
}

export default About
