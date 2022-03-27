import React from 'react'
import './Intro.css'
import me from '../../images/me2.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Wai Yan</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>
                            Software Engineering Student
                        </div>
                        <div className='i-title-item'>
                            Web Developer
                        </div>
                        <div className='i-title-item'>
                            Programmer
                        </div>
                        <div className='i-title-item'>
                            Major in Cyber Security
                        </div>
                    </div>
                </div>
                <p className='i-desc'>
                    Inerested in learning new technologies and frameworks to contribute toward the software industry and always looking for opportunities to accquire new knowledge. 
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img className='i-img' src={me} alt='alt-img' />
            {/* <img className='i-img' src='https://cdn.pixabay.com/photo/2018/04/07/01/25/tiger-3297540__340.png' alt='alt-img' /> */}
        </div>
    </div>
  )
}

export default Intro