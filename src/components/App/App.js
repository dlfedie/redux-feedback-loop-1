import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
        </div>
      </Router >
      
    )
  }
}

export default App;
