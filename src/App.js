import React from 'react';
import './App.css';
import NotFound from './components/Pages/NotFound'
import User from './components/user/User'
import About from './components/Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './components/layout/Alert';
import Home from './components/Pages/Home'
import Navbar from './components/layout/Navbar';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title='Github Finder' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
