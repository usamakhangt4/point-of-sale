import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import './CartWithItems.scss';

export default function CartWithItems() {
  return (
    <article>
      {/* item row */}
      <div className='itemRow'>
        <AiOutlineClose className='removeIcon' size='1.5em' />
        <img
          src='https://pos.t-techsolutions.org/wp-content/uploads/2020/06/Fresh-orange-300x237.jpg'
          alt=''
          className='itemImage'
        />
        <BiMessageDetail className='noteIcon' />
        <div className='itemName'>
          <div className='nameTitle'>Fresh Orange, Spain</div>
          <MdEdit className='editIcon' />
        </div>
        <div className='itemQuantity'>
          <div className='quantity'>
            <div className='minus'>-</div>
            <input
              type='number'
              className='quantityNumber'
              min='1'
              max=''
              value='1'
            />
            <div className='plus'>+</div>
          </div>
        </div>
        <div className='itemPrice'>$16.00</div>
        <div className='itemTotal'>$16.00</div>
      </div>

      {/* item edit row` */}
      <div className='itemEdit'>
        <div className='editPrice'>
          <div className='priceLabel'>Change price per unit</div>
          <div className='priceInputWrapper'>
            <input className='priceInput' readonly='' value='16.00'></input>
          </div>
        </div>
        <div className='editNote'>
          <div className='editNoteLabel'>
            <BiMessageDetail className='noteIcon' />
            Edit note
          </div>
          <textarea row='2'>sfsfsaf</textarea>
          <div className='editNoteButtonWrapper'>
            <button className='updateButton'>Update</button>
          </div>
        </div>
      </div>
    </article>
  );
}
