import React, { Component } from 'react';

import './StoreAndRegister.scss';

export default class StoreAndRegister extends Component {
  render() {
    return (
      <section className='store-and-register-page'>
        <div className='store-and-register-wrapper'>
          <figure>
            <img src='images/logo.jpeg' alt='logo' />
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
            </form>
          </figure>
        </div>
      </section>
    );
  }
}
