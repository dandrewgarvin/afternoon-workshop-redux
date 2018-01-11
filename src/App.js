import React, { Component } from 'react';
import './App.css';

import Parent from './components/Parent'
import PropTypes from 'prop-types'

class App extends Component {

  constructor(){
    super()

    this.state = {
      dataContext: 'This is the string passed through context!',
      dataProp: 'This is the string passed through props!',
      chicken: 'this is a chicken'
    }
    this.getChildContext = this.getChildContext.bind(this)
  }

  // This is the first part of context on the parent. 
  // This built-in method tells this component what data we want to be passed down to our children.

  getChildContext(){
    return { 
      value: this.state.dataContext,
      chicken: this.state.chicken
    }
  }


  render() {
    return (
      <div className="App">
      <h1>App Component</h1>
        <Parent value={this.state.dataProp} />
      </div>
    );
  }
}

// This is the second part of context on the parent.
// This is how the values types are declared, and the object is created/sent down

App.childContextTypes = {
  value: PropTypes.string,
  chicken: PropTypes.string
}

export default App;
