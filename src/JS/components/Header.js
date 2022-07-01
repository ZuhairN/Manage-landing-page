import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';

export default function Header() {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <img className='Header__logo' src={logo} alt='logo' />
        <div className='Header__menu'><img src={menu} alt='menu-logo' /></div>
        <ul className='Header__list'>
          <li><a href='./'>Pricing</a></li>
          <li><a href='./'>Product</a></li>
          <li><a href='./'>About Us</a></li>
          <li><a href='./'>Careers</a></li>
          <li><a href='./'>Community</a></li>
        </ul>
        <a className='Btn' href='./'>Get Started</a>
      </nav>
    </header>
  );
}
