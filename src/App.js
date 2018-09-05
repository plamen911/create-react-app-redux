import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import Home from './components/Home/Home'
import About from './components/About/About'
import GitHubUser from './components/GitHubUser/GitHubUser'
import NoMatch from './components/NoMatch/NoMatch'
import NavBar from './components/NavBar/NavBar'

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <main role='main' className='container-fluid mt-3'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about-us' component={About}/>
        <Route path='/github-user' component={GitHubUser}/>
        <Route component={NoMatch} />
      </Switch>
    </main>
  </div>
)

export default App
