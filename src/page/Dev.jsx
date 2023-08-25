import React from 'react'
import "./Dev.css"
import { EmailOutlined, Phone } from '@mui/icons-material'

const Dev = () => {
  return (
    <div className='devb'>
      <span className='pageTitle'> Made With Love </span>

      <div className="ap">
        <h2>I am a frontend developer and web designer specializing in creating visually appealing and user-friendly websites, combining technical expertise with a strong sense of aesthetics.</h2>
        <h5>Profiles</h5>
        <div className="linkss">
          <a href="https://github.com/siddhantvats09" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://siddhantvats09.github.io/Movie-App/" target="_blank" rel="noopener noreferrer">Movie App</a>
          <a href="https://64e084e044ad1035c754a8b3--siddhants.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
        <h4 >Developed by Siddhant...</h4>
        <h6> <EmailOutlined style={{ fontSize: "18px" }} /> siddhantvats840@gmail.com</h6>
        <h6> <Phone style={{ fontSize: "18px" }} /> 9817612848</h6>
      </div>

    </div>
  )
}

export default Dev