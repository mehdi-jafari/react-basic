import React, { Component } from 'react';
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
      <div className="container-fluid">
      <div className="row">
        <asid className="col-sm-1">

        </asid>
        <section className="col-sm-10">
          <Form onSubmit={this.populateEventList}/>
          <EventList events= {this.state.events}/>

        </section>
        <asid className="col-sm-1">

        </asid>
      </div>
      </div>
    );
  }
}

export default App;
