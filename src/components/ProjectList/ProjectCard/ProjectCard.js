import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({img, demoLink, githubLink, desc, name}) => {
  return (
      <>
        {/* <img src={img} alt='alt' /> */}
        <div className='pc-img-container'>
          <img src={img} alt='alt' className='p-img' />
        </div>
        <div className='pc-desc'>
          <h2>{name}</h2>
          <div className='desc'>
            <p>{desc}</p>
          </div>
          <div className='buttons'>
            <a href={demoLink} target="_blank" rel='noreferrer'>
              <button style={{ margin: '0px' }}>Demo</button>
            </a>
            <a href={githubLink} target="_blank" rel='noreferrer'>
              <button style={{ margin: '0px' }}>Code</button>
            </a>
            
          </div>
        </div>
      </>
    )
  }
  
  export default ProjectCard

  // <div className='p'>
  //   <a href={link} target="_blank" rel='noreferrer' >
  //     <img src={img} alt='alt' className='p-img' />
  //   </a>
  // </div>