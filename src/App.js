import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

class App extends Component {
  state={
    events:[]
  };
  populateEventList =(response) => {
    this.setState({events:  response.events});
  };
  render() {
    return (
       <div>
         {this.props.children}
       </div>
    );
  }
}

export default App;
