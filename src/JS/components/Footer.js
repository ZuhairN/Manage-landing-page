import logo from '../../images/footer_logo.svg';
export default function Footer() {

    function errorHandler(e) {
        e.preventDefault();
        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = document.querySelector('.Footer__error');
        const email = e.target.email;
        const form = e.target;
        if (email.value === '' || !regex.test(email.value)) {
            email.value = '';
            email.setAttribute('placeholder', 'johnmadden/mail');
            form.classList.add('invalid');
            error.textContent = "Please insert a valid email";
        } else {
            email.setAttribute('placeholder', 'Updates in your inbox...');
            form.classList.remove('invalid');

            setTimeout(() => {
                form.classList.add('valid');
                error.textContent = 'Yippee, thanks for subscribing!';
                setTimeout(() => {
                    form.classList.remove('valid');
                }, 5000);
            }, 300);
            email.value = '';
        }
    };

    return (
        <footer className='Footer'>
            <div className='container'>
                <form className='Footer__form' noValidate onSubmit={errorHandler}>
                    <input className='Footer__email' type='email' name='email' placeholder='Updates in your inbox...' />
                    <button className='Btn'>GO</button>
                    <p className='Footer__error'></p>
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
            </div>
        </footer>
    )
}