import { useState } from 'react';
import logo from '../../images/logo.svg';
import menuOpen from '../../images/icon-hamburger.svg';
import menuClose from '../../images/icon-close.svg';
import Btn from './Btn';

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  function toggle() {
    setIsNavExpanded(st => !st);
  }
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <img className='Header__logo' src={logo} alt='logo' />
        <img className='Header__menu' onClick={toggle} src={isNavExpanded ? menuClose : menuOpen} alt='menu-logo' />
        <ul className={`Header__list ${isNavExpanded ? 'active' : ''}`}>
          <li><a href='./'>Pricing</a></li>
          <li><a href='./'>Product</a></li>
          <li><a href='./'>About Us</a></li>
          <li><a href='./'>Careers</a></li>
          <li><a href='./'>Community</a></li>
        </ul>
        <Btn text='Get Started' />
        <div className={`Header__lightbox ${isNavExpanded ? 'active' : ''}`}></div>
      </nav>
    </header>
  );
}
