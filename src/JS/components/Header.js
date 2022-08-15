import useToggle from '../useToggle';
import Btn from './Btn';
import logo from '../../images/logo.svg';
import menuOpen from '../../images/icon-hamburger.svg';
import menuClose from '../../images/icon-close.svg';

export default function Header() {
  const [isNavExpanded, toggleIsNavExpanded] = useToggle(false);
  const active = isNavExpanded ? 'active' : '';
  const imgSrc = isNavExpanded ? menuClose : menuOpen;

  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <img className='Header__logo' src={logo} alt='logo' />
        <img className='Header__menu' onClick={toggleIsNavExpanded} src={imgSrc} alt='menu-logo' />
        <ul className={`Header__list ${active}`}>
          <li><a href='./'>Pricing</a></li>
          <li><a href='./'>Product</a></li>
          <li><a href='./'>About Us</a></li>
          <li><a href='./'>Careers</a></li>
          <li><a href='./'>Community</a></li>
        </ul>
        <Btn text='Get Started' />
        <div className={`Header__lightbox ${active}`}></div>
      </nav>
    </header>
  )
}
