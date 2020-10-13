import { AiOutlineClose } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import './CartWithItems.scss';
import React, { Component } from 'react'

export default class CartWithItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowEdit: false
    }
  }

  toggoleEdit = () => {
    this.setState({ isShowEdit: !this.state.isShowEdit });
  }

  render() {
    const { id, imgSRC, title, price, quantity } = this.props;
    const { isShowEdit } = this.state;
    return (
      <article key={id}>
        {/* item row */}
        <div className='itemRow'>
          <AiOutlineClose className='removeIcon' size='1.5em' />
          <img
            src={imgSRC}
            alt=''
            className='itemImage'
          />
          <BiMessageDetail className='noteIcon' />
          <div className='itemName'>
            <div className='nameTitle'>{title}</div>
            <div onClick={this.toggoleEdit}>
              <MdEdit className='editIcon' />
            </div>
          </div>
          <div className='itemQuantity'>
            <div className='quantity'>
              <div className='minus'>-</div>
              <input
                type='number'
                className='quantityNumber'
                min='1'
                max=''
                value={quantity}
              />
              <div className='plus'>+</div>
            </div>
          </div>
          <div className='itemPrice'>${price}</div>
          <div className='itemTotal'>${parseFloat(price) * quantity}</div>
        </div>

        {/* item edit row` */}
        {isShowEdit &&
          <div className='itemEdit'>
            <div className='editPrice'>
              <div className='priceLabel'>Change price per unit</div>
              <div className='priceInputWrapper'>
                <input className='priceInput' readOnly='' value='16.00'></input>
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
        }
      </article>

    )
  }
}

