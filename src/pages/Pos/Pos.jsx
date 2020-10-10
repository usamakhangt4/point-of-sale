import React from 'react';
import './Pos.scss';
import './ProductList.scss';
import { Navbar } from '../../components';
import { AiFillCalculator } from 'react-icons/ai';

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
        <article className='categoryList'></article>
      </section>

      {/* cart section on right side */}
      <section className='cart'>test</section>
    </main>
  );
}
