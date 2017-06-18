import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event';

const EventList = (props) =>{
  return (
    <div>
    console.log(props.events);
      {props.events.map(event => <Event {... event} />)}
    </div>
  );
};
export default EventList;
