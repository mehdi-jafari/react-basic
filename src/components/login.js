import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import {Router,browserHistory} from 'react-router';

class Login extends React.Component {

  responseFacebook = (response) =>
  {
      console.log(response);
      localStorage.setItem('UserName', response.name);
      localStorage.setItem('Email', response.email);
      localStorage.setItem('Token', response.accessToken);
      localStorage.setItem('Picture',response.picture.data.url);
      browserHistory.push('/home');    
  };
  render(){
    return (
        <div className="container-fluid">
        <FacebookLogin
          appId="1793256467356570"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        </div>
    );
}
};
export default Login;
