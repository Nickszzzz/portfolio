import React, { useEffect, useRef } from 'react'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedin, FaInstagram} from 'react-icons/fa'
import Lottie from 'lottie-web'
import arrowDown from '../assets/lottie/arrow-down.json'
import Background from '../components/Background'

const Banner = () => {

  const arrow_down = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: arrow_down.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: arrowDown
    })
  }, []);

  return (
    <div className='banner'>
      <div className="container">
        <div className="content">
          <h1>JAY MARK NICOLAS</h1>
          <p className='sub-title'>Full Stack Web and Mobile App Developer</p>
        </div>
        <Background />
        <div className="email-section">
          <a href="">jmnicolas4me@gmail.com</a>
        </div>
        <div className="social-icons">
            <FiGithub />
            <FaLinkedin />
            <FaInstagram />
        </div>
        <div className="down-button">
          <div className="arrow-down" ref={arrow_down}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
