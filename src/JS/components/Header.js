import { useState } from 'react';
import logo from '../../images/logo.svg';
import menuOpen from '../../images/icon-hamburger.svg';
import menuClose from '../../images/icon-close.svg';
import Btn from './Btn';

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  function toggle() {
    setIsNavExpanded(!isNavExpanded);
  }
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <img className='Header__logo' src={logo} alt='logo' />
        <img className='Header__menu' onClick={toggle} src={isNavExpanded ? menuClose : menuOpen} alt='menu-logo' />
        <ul className={isNavExpanded ? 'Header__list active' : 'Header__list'}>
          <li><a href='./'>Pricing</a></li>
          <li><a href='./'>Product</a></li>
          <li><a href='./'>About Us</a></li>
          <li><a href='./'>Careers</a></li>
          <li><a href='./'>Community</a></li>
        </ul>
        <Btn text='Get Started' />
        <div className={isNavExpanded ? 'Header__lightbox active' : 'Header__lightbox'}></div>
      </nav>
    </header>
  );
}
