import { FiGithub, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  const size = 30

  return (
    <footer>
      <h5>Tiarnan Marsten &copy; 2023</h5>
      <div className="footer-links">
        <a href="mailto:tkmarsten@gmail.com" className='fancy-link'>
          <FiMail size={size} />
        </a>
        <a href="https://github.com/tkmarsten" className='fancy-link' target="_blank" rel="noreferrer">
          <FiGithub size={size} />
        </a>
        <a href="https://www.linkedin.com/in/tkmarsten/" className='fancy-link' target="_blank" rel="noreferrer">
          <SiLinkedin size={size} />
        </a>
        <a href="https://leetcode.com/tkmarsten/" className='fancy-link' target="_blank" rel="noreferrer">
          <SiLeetcode size={size} />
        </a>
      </div>
    </footer>
  )
}

export default Footer