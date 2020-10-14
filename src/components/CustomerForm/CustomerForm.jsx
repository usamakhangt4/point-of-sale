import React from 'react';

export default function CustomerForm() {
  return (
    <div className='modal-wrap in'>
      <div className='modal'>
        <div className='modal__title'>
          <span>Set customer's profile</span>
          <i className='yith-pos-icon-clear modal__close'></i>
        </div>
        <div className='modal__content'>
          <div className='customer-search-wrapper'>
            <div className='current-customer'>Current customer:</div>
            <div className='current-customer-wrapper'>
              <span>Guest</span>
              <i className='yith-pos-icon-search'></i>
            </div>
            <div className='customer-results'>
              <div className='customer-search-input-wrapper'>
                <input
                  type='text'
                  className='customer-search'
                  name='customer-search'
                  value=''
                />
                <i className='yith-pos-icon-search'></i>
              </div>
              <div className='customer-search__noResult'>
                Please enter 3 or more characters.
                <span className='add-new-customer'>
                  Create a new customer profile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
