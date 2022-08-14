/* eslint-disable no-useless-escape */
import { useState } from 'react';
import logo from '../../images/footer_logo.svg';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';


const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Footer() {
    const [input, setInput] = useState('');
    const [validity, setValidity] = useState({ valid: true, accept: false });
    const handleChange = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === '' || !regex.test(input)) {
            setValidity(st => ({ ...st, valid: false }));
        } else {
            setTimeout(() => {
                setInput('');
                setValidity({ valid: true, accept: true });
                setTimeout(() => {
                    setValidity(st => ({ ...st, accept: false }))
                }, 5000)
            }, 300)
        }
    }
    const placeholder = validity.valid ? 'Updates in your inbox...' : 'johnmadden/mail';
    const error = validity.valid ? 'Yippee, thanks for subscribing!' : 'Please insert a valid email';

    return (
        <footer className='Footer'>
            <div className='container'>
                <form className={`Footer__form ${validity.valid ? '' : 'invalid'}${validity.accept ? 'valid' : ''}`} onSubmit={handleSubmit} noValidate>
                    <input className='Footer__email' type='email' name='email' value={input} onChange={handleChange} placeholder={placeholder} />
                    <button className='Btn'>GO</button>
                    <p className='Footer__error'>{error}</p>
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
                        <a href="./"><FaFacebookSquare /></a>
                        <a href="./"><SiYoutubemusic /></a>
                        <a href="./"><FaTwitter /></a>
                        <a href="./"><FaPinterest /></a>
                        <a href="./"><FaInstagram /></a>
                    </div>
                    <img className='Footer__logo' src={logo} alt='logo' />
                </div>
                <p className='Footer__copyright'>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    )
}