import React, { useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './ProjectList.css'
import { projects } from '../../data'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const ProjectList = () => {
  const [current, setCurrent] = useState(0)
  const length = projects.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(projects) || projects.length <= 0) {
    return null
  }

  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Some of the apps I developed.</h1>
            {/* <p className='pl-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has 
            </p> */}
        </div>
        <div className='pl-list'>
          {projects.map((project, index) => {
            return (
              <div key={index} className={index === current ? 'slide active' : 'slide'} >
                {index === current && (
                  <ProjectCard 
                    img={project.img} 
                    demoLink={project.demoLink} 
                    githubLink={project.githubLink}
                    desc={project.desc}
                    name={project.name}
                  />
                )}
              </div>
            )
          })}
          <MdNavigateBefore className='left-arrow' onClick={prevSlide}/>
          <MdNavigateNext className='right-arrow' onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default ProjectList