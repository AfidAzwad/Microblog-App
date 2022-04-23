import React from 'react';
import Post from './components/posts';
import Postdetail from './components/postdetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Switch>
            <Route  exact path='/' component={Login} />
            <Route  exact path='/blog' component={Post} />
            <Route  path='/blog/:id' component={Postdetail} />
      </Switch>
    </Router>
  );
}

export default App;
