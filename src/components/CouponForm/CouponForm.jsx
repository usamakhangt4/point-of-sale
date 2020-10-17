/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './CouponForm.scss';

export default function CouponForm() {
  return (
    <>
      <div id='open-modal-CouponForm' className='modal-window'>
        <div className='modal'>
          <div className='modal-header'>
            <div className='modal-close-wrapper'>
              <a href='#' title='Close' className='modal-close'>
                <strong>Close</strong>
              </a>
            </div>
            <div className='order-total'>
              <strong>Apply coupon to order total</strong>
              <strong className='order-total-price'>$10.99</strong>
            </div>
          </div>
          <div className='modal-body'>
            <form action='#' className='addNoteForm'>
              <label htmlFor='note'>Add a note to this order</label>
              <textarea
                name=''
                id='note'
                cols='30'
                rows='10'
                className='note'></textarea>
              <button>SAVE NOTE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
