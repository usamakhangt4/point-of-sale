import React from 'react';
import './Pos.scss';
import './Cart.scss';
import './ProductList.scss';
import { Navbar } from '../../components';
import { AiFillCalculator, AiOutlineClose } from 'react-icons/ai';
import { MdRemoveShoppingCart, MdAdd, MdLocalShipping } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { RiPagesLine } from 'react-icons/ri';

export default function Pos() {
  return (
    <main>
      {/* navbar section */}
      <Navbar />

      {/* product list on left side */}
      <section className='productList'>
        <article className='searchSection'>
          <div className='logo'>
            <img src='/images/logo.jpeg' alt='logo' />
          </div>
          <div className='search'>
            <div className='searchWrapper'>
              <input type='text' name='' id='' />
            </div>
          </div>
          <div className='button'>
            <div className='calculatorWrapper'>
              <a href='/'>
                <AiFillCalculator size='2.1em' />
              </a>
            </div>
          </div>
        </article>
        {/* pos tabs section */}
        <article className='posTabs'>
          <div className='productListFilters'>
            <span className='active'>All</span>
            <span className=''>On sale</span>
            <span className=''>Featured</span>
          </div>
          <div className='productActions'>
            <span className='addProduct  disabled'>
              <i className='icon-add'></i> Add product
            </span>
            <span className='scanProduct  disabled'>
              <i className='icon-barcode'></i> Scan product
            </span>
          </div>
        </article>
        {/* pos category section */}
        <article className='categoryListContainer'>
          <div className='categoryList'>
            <div className='productCategory category1'>
              <div className='categoryImage image'></div>
              <div className='categoryHeading'>
                <div className='categoryTitle'>bakery</div>
              </div>
            </div>
            <div className='productCategory category2'>
              <div className='categoryImage'></div>
              <div className='categoryHeading'>
                <div className='categoryTitle'>bakery</div>
              </div>
            </div>
            <div className='productCategory category3'>
              <div className='categoryImage'></div>
              <div className='categoryHeading'>
                <div className='categoryTitle'>bakery</div>
              </div>
            </div>
            <div className='productCategory category4'>
              <div className='categoryImage'></div>
              <div className='categoryHeading'>
                <div className='categoryTitle'>bakery</div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* cart section on right side */}
      <section className='cart'>
        <div className='posTabs'>
          <div className='cartButtons'>
            <span className='active'>cart</span>
            <span className='disabled'>Customer</span>
            <span className='disabled'>Address</span>
            <span className='disabled'>cart-img</span>
          </div>
        </div>
        <div className='posItems'>
          <div className='cartEmpty'>
            <MdRemoveShoppingCart className='emptyImage' />
            <span>Add the first product to the cart</span>
          </div>
        </div>
        <div className='posTotals'>
          <div className='cartTotal subtotal'>
            <div className='totalLabel'>Subtotal</div>
            <div className='totalPrice'>$0.00</div>
          </div>
          <div className='cartTotal totalTotal'>
            <div className='totalLabel'>Subtotal</div>
            <div className='totalPrice'>$0.00</div>
          </div>
        </div>
        <div className='posActions'>
          <div className='cartAction emptyCart'>
            <AiOutlineClose size='1.3em' />
            <span className='label'>EmptyCart</span>
          </div>
          <div className='cartAction addNote'>
            <BiMessageDetail className='icon' size='1.5em' />
            <span className='label'>Add Note</span>
          </div>
          <div className='cartAction discount'>
            <MdAdd size='1.5em' className='icon' />
            <span className='label'>Add fee or discount</span>
          </div>
          <div className='cartAction coupon'>
            <RiPagesLine size='1.5em' className='icon' />
            <span className='label'>Apply coupon</span>
          </div>
          <div className='cartAction shipping'>
            <MdLocalShipping size='1.5em' className='icon' />
            <span className='label'>Shipping</span>
          </div>
          <div className='cartAction save disabled'>
            <MdRemoveShoppingCart size='1.5em' className='icon' />
            <span className='label'>Suspend & save cart</span>
          </div>
          <div className='cartAction pay disabled'>
            <span className='label'>Pay</span>
          </div>
        </div>
      </section>
    </main>
  );
}
