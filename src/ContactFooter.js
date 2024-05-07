import React from 'react'

const ContactFooter = () => {
  return (
    <div className="footer-content">
      <p className="copyright" style={{ textAlign: 'center', fontSize: '35px', fontWeight: '500' }}>
        &copy; 2024 Maintained by Soham Thodge
      </p> 
      <ul className="social-icons">
        <li><a href="https://github.com/Soham-Thodge" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        <li><a href="https://developers.google.com/profile/u/TheOnlySoham" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a></li>
        <li><a href="https://www.linkedin.com/in/soham-thodge-515676229" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
  )
}

export default ContactFooter;