import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './components/eventList';
import Form from './components/form';

class App extends Component {
  state={
    events:[]
  };
  populateEventList =(response) => {
    console.log(response);
    this.setState({events:  response.events});
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form onSubmit={this.populateEventList}/>
        <EventList events= {this.state.events}/>
      </div>
    );
  }
}

export default App;
