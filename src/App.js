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
    this.setState({events:  response.events});
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Event Explorer Application</h2>
        </div>
        <Form onSubmit={this.populateEventList}/>
        <EventList events= {this.state.events}/>
      </div>
    );
  }
}

export default App;
