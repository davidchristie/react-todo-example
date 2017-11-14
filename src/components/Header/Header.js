import React from 'react'

import Logo from '../Logo'
import Title from '../Title'
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <Logo />
      <Title>Welcome to Learn React</Title>
    </header>
  )
}

export default Header
