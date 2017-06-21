import React from 'react';
import ReactDOM from 'react-dom';
import LoginInfo from './loginInfo'
import LogoutInfo from './logoutInfo'
import auth from '../utility/authentication';

const Header = (props) =>{
  return (
    <div>
      <header className="container-fluid">
        <div className="container-fluid">
          <div className="col-sm-4">
            <LoginInfo />
          </div>
          <div className="col-sm-4">
            <h1> Eventful Search App </h1>
          </div>
          <div className="col-sm-4">
            <div className={auth.hasToken() ? '' : 'hidden'}>
              <LogoutInfo style="display:none" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
