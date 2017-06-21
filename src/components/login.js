import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import FacebookLogin from 'react-facebook-login';
import Header from './header';
import auth from '../utility/authentication';

class Login extends React.Component {

  responseFacebook = (response) =>
  {
      console.log(response);
      auth.saveLoginInfo(response);
      browserHistory.push('/home');
  };
  render(){
    return (
        <div className="container-fluid">
          <Header />
          <FacebookLogin
            appId="1793256467356570"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>
    );
}
};
export default Login;
