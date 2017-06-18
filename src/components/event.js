import React from 'react';
import ReactDOM from 'react-dom';

const Event = (props) =>{
  return (
    <div style={{margine:'2em'}}>
      <img width="100px" src={props.imageUri}/>
      <div style={{margineleft:10, display:'inline-block'}}>
        <div style={{fontsize:'1.25em', fontweight:'bold'}}> {props.title}</div>
        <div>{props.venue}</div>
        <div>{props.performers}</div>
        <div>{props.date}</div>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};
export default Event;
