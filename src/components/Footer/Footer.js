import React from 'react'
import './Footer.css'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className='footer-contents'>
            <div className='footer-left'>
                <div className='footer-logo'>
                <img className='logo' src={Logo} alt='logo' />
                </div>
            </div>
            <div className='footer-right'>
                <div className='footer-links'>
                    <ul>
                        <li className='footer-list'>
                        <a href='#'>About</a>
                        </li>
                        <li className='footer-list-2'>
                        <a href='#'>Features</a>
                        </li>
                        <li className='footer-list-3'>
                        <a href='#'>Team</a>
                        </li>
                        <li className='footer-list-3'>
                        <a href='#'>FAQ</a>
                        </li>
                        <li className='footer-list-3'>
                        <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            {/* <div className='footer-socail-icons'>
            <ul>
                <li className='footer-socail-list'>
                <a href='#'>
                    <i className='fab fa-facebook-f'>facebook</i>
                </a>
                </li>
                <li className='footer-socail-list'>
                <a href='#'>
                    <i className='fab fa-twitter'>twitter</i>
                </a>
                </li>
                <li className='footer-socail-list'>
                <a href='#'>
                    <i className='fab fa-instagram'>instagram</i>
                </a>
                </li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Footer