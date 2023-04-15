import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='links'>
        <li><Link to='/' className='fancy-link'>Home</Link></li>
        <li><Link to='/about' className='fancy-link'>About</Link></li>
        <li><Link to='/portfolio' className='fancy-link'>Portfolio</Link></li>
      </ul>
    </nav>
  )
}

export default Nav