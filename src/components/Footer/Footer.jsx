import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='left-container'>
                    <div className='location'>
                        <FaSearchLocation className='left-container__icon' />
                        <div className='location__content'>
                            <p className='content__text'>221b Baker St.</p>
                            <span className='content__text--bold'>London, GB</span>
                        </div>
                    </div>
                    <div className='left-container__phone'>
                        <span className='phone__text'>
                            <FaPhone className='left-container__icon' />
                            8-800-555-35-35
                        </span>
                    </div>
                    <div className='left-container__email'>
                        <span className='email__text'><FaMailBulk className='left-container__icon' />pp@gmail.com</span>
                    </div>
                </div>

                <div className='right-container'>
                    <span className='right-container__text--bold'>About Us</span>
                    <p className='right-container__text'>
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    </p>
                    <div className='right-container__social'>
                        <FaFacebook className='social__icon' />
                        <FaTwitter className='social__icon' />
                        <FaLinkedin className='social__icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer