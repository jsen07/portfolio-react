import React from 'react'

export default function Navbar() {
  return (
    <div className='header'>
        <img src="assets/logo.png" class="logo" alt="website-logo-image"/>
        <nav class="nav-bar">
    
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    
        </nav>
      
    </div>
  )
}

