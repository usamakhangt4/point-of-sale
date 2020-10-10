import React from 'react';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdStoreMallDirectory } from 'react-icons/md';
import { BsBellFill } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { CgMaximizeAlt } from 'react-icons/cg';

export default function navbar() {
  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='dropdown hamburgerMenu'>
          <GiHamburgerMenu size='2em' />
        </div>
        <div className='register-info'>
          <MdStoreMallDirectory className='icon-store' size='2em' />
          <span>
            <strong>Store:</strong> Grocery Store
          </span>
          <span>
            <strong>Register:</strong> Evening Time Register
          </span>
          <a
            class='manage-store-link'
            href='https://pos.t-techsolutions.org/wp-admin/'>
            Manage Store
          </a>
          <a
            class='register-logout-link'
            href='https://pos.t-techsolutions.org/pos/?yith-pos-register-logout=1'>
            Switch Register
          </a>
        </div>
        <div className='audio-player'>
          <BsBellFill size='1.3em' />
        </div>
        <div className='full-screen'>
          <CgMaximizeAlt size='1.3em' />
        </div>
        <div className='dropdown view-user'>
          <figure>
            <img src='/images/user.jpeg' alt='user img' />
            <figcaption>
              <strong>Posonline909</strong>
            </figcaption>
          </figure>
        </div>
        <div className='logout'>
          <a href='/'>
            <RiLogoutBoxRLine size='2em' />
            logout
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
