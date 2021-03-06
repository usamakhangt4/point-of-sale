/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Pos.scss';
import './Cart.scss';
import './ProductList.scss';
import { AiFillCalculator, AiOutlineClose } from 'react-icons/ai';
import {
  MdRemoveShoppingCart,
  MdAdd,
  MdLocalShipping,
  MdShoppingCart,
  MdAddShoppingCart,
  MdLocationOn,
} from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { RiPagesLine, RiUserFill } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { categories, products } from './../../common/data';
import Calculator from '../../components/Calculator/Calculator/Calculator';
import logo from '../../images/logo.jpeg';


import {
  Navbar,
  ProductCard,
  EmptyCart,
  CartWithItems,
  CustomerForm,
  CustomerAddressForm,
  AddNoteForm,
  CouponForm,
  ShippingForm,
  DiscountForm,
  SaveCartForm,
} from '../../components';

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProductShow: false,
      products: [],
      categories: [],
      isCartEmpty: false,
      cartItems: [],
      total: 0,
      subTotal: 0,
      discount: 0,
      fee: 0,
    };
  }

  componentDidMount() {
    this.setState({ categories, products });
  }

  viewProduct = () => {
    this.setState({ isProductShow: true });
  };

  calculateSubTotal = () => {
    const subTotalPrice = this.state.cartItems.reduce((total, elem) => {
      return total + elem.price * elem.quantity;
    }, 0);
    this.setState({ subTotal: subTotalPrice.toFixed(2) }, () => {
      this.calculateTotal();
    });
  };

  calculateTotal = () => {
    const totalPrice =
      this.state.subTotal + this.state.fee - this.state.discount;
    this.setState({ total: totalPrice });
  };

  emptyCart = () => {
    this.setState({ cartItems: [] }, () => {
      this.calculateSubTotal();
    });
  };

  removeItem = (id) => {
    let itemList = this.state.cartItems.filter((elem) =>
      elem.id === id ? false : true
    );
    this.setState({ cartItems: itemList }, () => {
      this.calculateSubTotal();
    });
  };

  changeQuantity = (id, type) => {
    let isItemFound = false;
    let itemList = this.state.cartItems.map((elem, i) => {
      if (elem.id === id) {
        if (type === 'increase') elem.quantity = elem.quantity + 1;
        else if (type === 'decrease' && elem.quantity > 1)
          elem.quantity = elem.quantity - 1;
        isItemFound = true;
      }
      return elem;
    });
    this.setState({ cartItems: itemList }, () => {
      this.calculateSubTotal();
    });
    return isItemFound;
  };

  addToCart = (id, src, title, price) => {
    const item = {};
    const itemList = this.state.cartItems;
    let isItemExist = false;
    if (this.state.cartItems.length > 0) {
      isItemExist = this.changeQuantity(id, 'increase');
    }
    if (!isItemExist) {
      item.id = id;
      item.imgSRC = src;
      item.title = title;
      item.quantity = 1;
      item.price = parseFloat(price);
      itemList.push(item);
      this.setState({ cartItems: itemList }, () => {
        this.calculateSubTotal();
      });
    }
  };

  goBackFromProducts = () => {
    this.setState({ isProductShow: false });
  };

  render() {
    const {
      categories,
      products,
      isProductShow,
      cartItems,
      total,
      subTotal,
    } = this.state;
    return (
      <main>
        {/* navbar section */}
        <Navbar />

        {/* product list on left side */}
        <section className='productList'>
          <article className='searchSection'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='search'>
              <div className='searchWrapper'>
                <input type='text' name='' id='' />
              </div>
            </div>
            <div className='button'>
              <div className='search-section-calculator-button'>
                <a href='#'>
                  <AiFillCalculator size='2.1em' />
                </a>
                {/* <div className='search-section-edit-item-calculator-wrapper search-section-show-calculator'>
                  <div className='search-section-edit-item-calculator'>
                    <Calculator/>
                  </div>
                </div> */}
              </div>
            </div>
          </article>
          {/* pos tabs section */}
          <article className='posTabs'>
            {/* <div className='productListFilters'> */}
            {/* <button className='active'>All</button> */}
            <button className=''>All</button>
            <button className=''>On sale</button>
            <button className=''>Featured</button>
            {/* </div> */}
            {/* <div className='productActions'>
              <span className='addProduct  disabled'>
                <i className='icon-add'></i> Add product
              </span>
              <span className='scanProduct  disabled'>
                <i className='icon-barcode'></i> Scan product
              </span>
            </div> */}
          </article>
          {/* pos category section */}
          <article className='categoryListContainer'>
            <div className='categoryList'>
              {isProductShow && (
                <div
                  className='product-list__go-back-wrapper'
                  onClick={this.goBackFromProducts}>
                  <div className='product-list__go-back'>
                    <IoIosArrowBack size='3em' />
                  </div>
                </div>
              )}
              {!isProductShow
                ? categories.map((elem, i) => {
                    return (
                      <div onClick={this.viewProduct}>
                        <ProductCard
                          name={elem.name}
                          imgURL={elem.image.src.replace(/\\/g, '')}
                        />
                      </div>
                    );
                  })
                : products.map((elem, i) => {
                    return (
                      <div
                        onClick={() =>
                          this.addToCart(
                            elem.id,
                            elem.images[0].src.replace(/\\/g, ''),
                            elem.name,
                            elem.price
                          )
                        }>
                        <ProductCard
                          name={elem.name}
                          imgURL={elem.images[0].src.replace(/\\/g, '')}
                          price={elem.price}
                        />
                      </div>
                    );
                  })}
            </div>
          </article>
        </section>

        {/* cart section on right side */}
        <section className='cart'>
          <div className='posTabs'>
            <div className='cartButtons'>
              <a href='#' className='active cart-tabs'>
                <MdShoppingCart size='1.5em' /> <span>Cart</span>
              </a>
              <a href='#open-modal-customer' className='cart-tabs'>
                <RiUserFill size='1.5em' /> <span> Customer</span>
              </a>
              <a href='#open-modal-address' className='cart-tabs'>
                <MdLocationOn size='1.5em' /> <span>Address</span>
              </a>
              <a href='/' className='disabled cart-tabs'>
                <MdAddShoppingCart size='1.5em' />
              </a>
            </div>
          </div>
          <div className='posItems'>
            {cartItems.length > 0 ? (
              cartItems.map((elem, i) => {
                return (
                  <CartWithItems
                    id={elem.id}
                    imgSRC={elem.imgSRC}
                    title={elem.title}
                    quantity={elem.quantity}
                    price={elem.price}
                    changeQuantityNumber={this.changeQuantity}
                    removeCartItem={this.removeItem}
                  />
                );
              })
            ) : (
              <EmptyCart />
            )}
          </div>
          <div className='posTotals'>
            <div className='cartTotal subtotal'>
              <div className='totalLabel'>Subtotal</div>
              <div className='totalPrice'>${subTotal}</div>
            </div>
            <div className='cartTotal totalTotal'>
              <div className='totalLabel'>Total</div>
              <div className='totalPrice'>${total}</div>
            </div>
          </div>
          <div className='posActions'>
            <div className='cartAction emptyCart' onClick={this.emptyCart}>
              <AiOutlineClose size='1.3em' />
              <span className='label'>EmptyCart</span>
            </div>
            <a href='#open-modal-addNote' className='cartAction addNote'>
              <BiMessageDetail className='icon' size='1.5em' />
              <span className='label'>Add Note</span>
            </a>
            <a href='#open-modal-DiscountForm' className='cartAction discount'>
              <MdAdd size='1.5em' className='icon' />
              <span className='label'>Add fee or discount</span>
            </a>
            <a href='#open-modal-CouponForm' className='cartAction coupon'>
              <RiPagesLine size='1.5em' className='icon' />
              <span className='label'>Apply coupon</span>
            </a>
            <a href='#open-modal-ShippingForm' className='cartAction shipping'>
              <MdLocalShipping size='1.5em' className='icon' />
              <span className='label'>Shipping</span>
            </a>
            <a
              href='#open-modal-SaveCartForm'
              className='cartAction save disabled'>
              <MdRemoveShoppingCart size='1.5em' className='icon' />
              <span className='label'>Suspend & save cart</span>
            </a>
            <a href='#open-modal-' className='cartAction pay disabled'>
              <span className='label'>Pay</span>
            </a>
          </div>
        </section>
        {/* ################################## */}

        <SaveCartForm />
        <ShippingForm />
        <CouponForm />
        <DiscountForm />
        <AddNoteForm />
        <CustomerAddressForm />
        <CustomerForm />
      </main>
    );
  }
}

export default Pos;
