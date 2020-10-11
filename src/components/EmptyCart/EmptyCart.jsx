import React from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md';
export default function EmptyCart() {
    return (
      <div className='cartEmpty'>
        <MdRemoveShoppingCart className='emptyImage' />
        <span>Add the first product to the cart</span>
      </div>
    );
}
