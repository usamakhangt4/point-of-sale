import React, { Component } from 'react';
import AuthService from './../../services/AuthService';
import getAuthHeader from './../../services/auth-header';
import logo from '../../images/logo.jpeg';

import './Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isShowSelection: false,
    };
  }

  componentDidMount() {
    let authorizationHeader = getAuthHeader();
    if (authorizationHeader) {
      AuthService.authorize(authorizationHeader).then((response) => {
        if (response.data.token && response.data.status === 'success') {
          this.props.history.push('/');
        }
      });
    }
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    let loginObj = {
      password: this.state.password,
      email: this.state.email,
    };
    AuthService.login(loginObj)
      .then((response) => {
        if (response.status === 'success') {
          this.setState({ isShowSelection: true });
        }
      })
      .catch((err) => {});
  };

  render() {
    return (
      <section className='login-page'>
        <div className='login-wrapper'>
          {!this.state.isShowSelection ? (
            <article>
              <figure className='logo'>
                <img src={logo} alt='logo' />
              </figure>
              <h2>Login</h2>
              <div className='login-form'>
                <input
                  type='email'
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                <button onClick={this.handleLogin} className='auth-card-button'>
                  Login
                </button>
              </div>
            </article>
          ) : (
            <article>
              <figure className='logo'>
                <img src={logo} alt='logo' />
              </figure>
              <h2>Choose Store and Register</h2>
              <form action='#' className='store-and-register-form'>
                <select name='' id=''>
                  <option value=''>Choose a Store</option>
                  <option value=''>Grocery Store</option>
                  <option value=''>Clothing Store</option>
                </select>
                <select name='' id=''>
                  <option value=''>Choose a Register</option>
                  <option value=''>Evening Time Register</option>
                  <option value=''>Morning Time Register</option>
                </select>
                <button
                  onClick={() => window.location.reload()}
                  className='auth-card-button'>
                  Open Register
                </button>
              </form>
            </article>
          )}
        </div>
      </section>
    );
  }
}
