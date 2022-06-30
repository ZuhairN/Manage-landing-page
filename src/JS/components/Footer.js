import logo from '../../images/footer_logo.svg';
export default function Footer() {
    return (
        <footer className='Footer'>
            <form className='Footer__form'>
                <input className='Footer__email' type='email' placeholder='Updates in your inbox...' />
                <button className='Btn'>GO</button>
            </form>
            <nav className='Footer__nav'>
                <ul className='Footer__list'>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./'>Pricing</a></li>
                    <li><a href='./'>Products</a></li>
                    <li><a href='./'>About Us</a></li>
                </ul>
                <ul className='Footer__list'>
                    <li><a href='./'>Careers</a></li>
                    <li><a href='./'>Community</a></li>
                    <li><a href='./'>Privacy Policy</a></li>
                </ul>
            </nav>
            <div className='Footer__media'>
                <div className='Footer__social'>
                    <a href="./"><i className="fa-brands fa-facebook-square fa-2xl"></i></a>
                    <a href="./"><i className="fa-brands fa-youtube fa-2xl"></i></a>
                    <a href="./"><i className="fa-brands fa-twitter fa-2xl"></i></a>
                    <a href="./"><i className="fa-brands fa-pinterest fa-2xl"></i></a>
                    <a href="./"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                </div>
                <img className='Footer__logo' src={logo} alt='logo' />
            </div>
            <p className='Footer__copyright'>Copyright 2020. All Rights Reserved</p>
        </footer>
    )
}