import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Button from '../components/Button'
import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='header-left'>
          <Logo />
      </div>
      <div className='header-right'>
          <Navigation />
          <Button />
      </div>
      <div className="responsive-header">
        <button>
            <RxHamburgerMenu />
        </button>
        <div className="responsive-wrapper">
            <div className="container">
              <AiOutlineClose />
              <Navigation />
              <Button />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
