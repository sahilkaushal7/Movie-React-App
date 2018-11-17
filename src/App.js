import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Movies from './Containers/Movies/Movies';
import Movie from './Containers/Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Movies}></Route>
          <Route path="/:id" component={Movie}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
