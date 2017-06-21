import React from 'react';
import ReactDOM from 'react-dom';
import auth from '../utility/authentication';

const LoginInfo = (props) =>{
  return (
    <div className="container-fluid search-result-item">
      <div className="col-sm-offset-5 col-sm-1">
        <img src={auth.getPicture()}/>
      </div>
      <div className="col-sm-6">
        <div><b>{auth.getName()}</b></div>
        <div>{auth.getEmail()}</div>
      </div>
    </div>
  );
};
export default LoginInfo;
