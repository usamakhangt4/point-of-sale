import React, { Component } from 'react';

import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <section className="login-page">
        <div className='login-wrapper'>
          <figure>
            <img src='images/logo.jpeg' alt='logo' />
            <h2>Login</h2>
            <form action='#' className="login-form">
              <input type='email' name='' id='' />
              <input type='password' name='' id='' />
            </form>
          </figure>
        </div>
      </section>
    );
  }
}
