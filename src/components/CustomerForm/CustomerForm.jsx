import React from 'react';
import './CustomerForm.scss';

export default function CustomerForm() {
  return (
    <>
      
      <div id='open-modal' className='modal-window'>
        <div>
          <a href='#' title='Close' className='modal-close'>
            Close
          </a>
          <h1>Voilà!</h1>
          <div>
            A CSS-only modal based on the :target pseudo-className. Hope you
            find it helpful.
          </div>
          <div>
            <small>Check out</small>
          </div>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Amino: Live CSS Editor for Chrome
          </a>
        </div>
      </div>
    </>
  );
}
