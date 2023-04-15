import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className="home" id="top">
      <Banner />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default Home