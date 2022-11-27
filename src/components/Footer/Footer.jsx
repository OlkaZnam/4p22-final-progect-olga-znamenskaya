import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation className='footer-icon' />
                        <div>
                            <p>221b Baker St.</p>
                            <h4>London, GB</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone className='footer-icon' />8-800-555-35-35</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk className='footer-icon' />pp@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Us</h4>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    </p>
                    <div className='social'>
                        <FaFacebook className='footer-icon-social' />
                        <FaTwitter className='footer-icon-social' />
                        <FaLinkedin className='footer-icon-social' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer