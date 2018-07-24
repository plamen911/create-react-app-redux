import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import GitHubUser from './components/GitHubUser/GitHubUser'

const App = () => (
  <div>
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about-us'>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/github-user'>GitHub User</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main role='main' className='container-fluid mt-3'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about-us' component={About}/>
      <Route exact path='/github-user' component={GitHubUser}/>
    </main>
  </div>
)

export default App
