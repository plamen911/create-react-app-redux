import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => (
  <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
    <div className='collapse navbar-collapse'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about-us' className='nav-link'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/github-user' className='nav-link'>GitHub User</Link>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='nav-link'>Login</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default navBar
