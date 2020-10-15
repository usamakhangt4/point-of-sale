import React from 'react';
import './CustomerAddressForm.scss';

export default function CustomerForm() {
  return (
    <>
      <div id='open-modal-address' className='modal-window'>
        <div className='modal'>
          <div className='modal-header'>
            <strong>Shipping Address</strong>
            <a href='#' title='Close' className='modal-close'>
              <strong>Close</strong>
            </a>
          </div>
          <div className='modal-body'>body</div>
        </div>
      </div>
    </>
  );
}
