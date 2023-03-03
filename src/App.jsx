import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="home" id="top">
        <Banner />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
