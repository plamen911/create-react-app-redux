import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4
import Home from './components/Home/Home'
import About from './components/About/About'
import GitHubUser from './components/GitHubUser/GitHubUser'
import NoMatch from './components/NoMatch/NoMatch'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

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
        <Route path='/login' component={Login}/>
        <Route component={NoMatch} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App
