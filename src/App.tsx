import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed/index'
import Profile from './containers/Profile/index'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/register' component={Register} />
        <Route path='/app' component={Navbar} />
        <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
        <Route exact={true} path='/app/profile' component={Profile} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
