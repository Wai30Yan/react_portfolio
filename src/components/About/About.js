import React from 'react'
import './About.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ThreeD from '../../3D_components/ThreeD'

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <ThreeD />
      </div>
      <div className='a-right'>
          <h1 className='a-title'>About Me</h1>
          <p className='a-desc'>
            My name is Wai Yan Myint Thu. I'm a fourth year Software Engineering student learning at the University of Technology, Sydney. I'm majoring in Cyber Security but I'm more interested in Web Development. That being said, I still enjoy watching pentesting tutorials on Youtube. 
            <br/>
            Fun fact about me, I don't have a first name or last name. That's because I'm from Myanmar and having a last name is not part of our culture. You can just call me, 'Wai Yan'. Apart from programming, I also love cooking, bush walking and playing guitar. 
            <br/>
            The purpose of this website is to showcase a couple of projects I've developed and use it as a portfolio website as I'm currently applying for an internship or a junior position. Thank you for checking it out. Hope to work with or for you in the future. 
          </p>
          <div>
            <a href={process.env.REACT_APP_GITHUB} className="a-links" target="_blank" rel='noreferrer'>
              <FaGithub className='a-icons' /> 
            </a>
            <a href={process.env.REACT_APP_LINKEDIN} className="a-links" target="_blank" rel='noreferrer'>
              <FaLinkedin className='a-icons'/>
            </a>
            <a href={process.env.REACT_APP_INSTA} className="a-links" target="_blank" rel='noreferrer'>
              <FaInstagram className='a-icons'/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default About