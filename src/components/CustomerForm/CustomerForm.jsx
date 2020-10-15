import React from 'react';
import './CustomerForm.scss';

export default function CustomerForm() {
  return (
    <>
      <div id='open-modal-customer' className='modal-window'>
        <div className='modal'>
          <div className='modal-header'>
            <strong>Set customer's profile</strong>
            <a href='#' title='Close' className='modal-close'>
              <strong>Close</strong>
            </a>
          </div>
          <div className='modal-body'>
            <div className=''>Current Customer:</div>
            <div className='current-customer'>
              <span className='customer-name'>Guest</span>
              <span className='search-icon'>search</span>
            </div>
            <input
              type='search'
              name=''
              id=''
              className='customer-form-search'
            />
            <span>
              Please enter 3 or more characters.
              <a href='/' className='customer-form-link'>
                Create a new customer profile
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
