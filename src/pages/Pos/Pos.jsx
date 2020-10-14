import React, { Component } from 'react';
import './Pos.scss';
import './Cart.scss';
import './ProductList.scss';
import { AiFillCalculator, AiOutlineClose } from 'react-icons/ai';
import { MdRemoveShoppingCart, MdAdd, MdLocalShipping } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { RiPagesLine } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { categories, products } from './../../common/data';

import {
  Navbar,
  ProductCard,
  EmptyCart,
  CartWithItems,
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
    this.setState({ subTotal: subTotalPrice }, () => {
      this.calculateTotal();
    });
  };

  calculateTotal = () => {
    const totalPrice =
      this.state.subTotal + this.state.fee - this.state.discount;
    this.setState({ total: totalPrice });
  };

  increaseQuantity = (id) => {
    let isItemFound = false;
    let itemList = this.state.cartItems.map((elem, i) => {
      if (elem.id === id) {
        elem.quantity = elem.quantity + 1;
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
      isItemExist = this.increaseQuantity(id);
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
              <div className='product-list__go-back-wrapper'>
                <div className='product-list__go-back'>
                  <IoIosArrowBack size='3em' />
                </div>
              </div>
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
              <span className='active'>cart</span>
              <span className='disabled'>Customer</span>
              <span className='disabled'>Address</span>
              <span className='disabled'>cart-img</span>
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
}

export default Pos;
