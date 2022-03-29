import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import { MdPhoneInTalk, MdEmail, MdLocationOn } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const [done, setDone] = useState(false)

  useEffect(() => {
    setTimeout(
      function () {
        setDone(false)
      }, 4000
    )
  }, [done])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setDone(true)

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='c'>
      <div className='c-wrapper'>
        <div className='c-left'>
          <div className='c-left-wrapper'>
            <h1 className='c-title'>Hire me for your projects</h1>
            <div className='c-info'>
              <div className='c-info-items'>
                <MdPhoneInTalk className='c-icons'/>
                +61449744269
              </div>
              <div className='c-info-items'>
                <MdEmail className='c-icons'/>
                mr.waiyanmyint@gmail.com
              </div>
              <div className='c-info-items'>
                <MdLocationOn className='c-icons'/>
                Pitt Street, Haymarket, Sydney, NSW 2000
              </div>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>Or send an email from here.</b> Always available for
            freelancing if  the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder='Message' name="message" />
            <div>

            <button>Submit</button>
            {done && 
              <span>
                Thank you, I'll reply as soon as I can
              </span> 
            }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact