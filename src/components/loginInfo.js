import React from 'react';
import ReactDOM from 'react-dom';

const LoginInfo = (props) =>{
  return (
    <div className="container-fluid search-result-item">
      <div className="col-sm-offset-5 col-sm-1">
        <img src={localStorage.getItem('Picture')}/>
      </div>
      <div className="col-sm-6">
        <div><b>{localStorage.getItem('UserName')}</b></div>
        <div>{localStorage.getItem('Email')}</div>
      </div>
    </div>
  );
};
export default LoginInfo;
