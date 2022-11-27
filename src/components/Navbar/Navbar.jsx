import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa'

import './NavbarStyles.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header__bg' : 'header'}>
            <Link to='/'>
                <h1>
                    <FaSeedling className='navigation-menu__icon' />
                    PP
                </h1>
            </Link>
            <ul className={click ? 'navigation-menu active' : 'navigation-menu'}>
                <li className='navigation-menu__item'>
                    <Link className='item__link' to='/'>Home</Link>
                </li>
                <li className='navigation-menu__item'>
                    <Link className='item__link' to='/catalog'>Catalog</Link>
                </li>
                <li className='navigation-menu__item'>
                    <Link className='item__link' to='/contact'>Contact Us</Link>
                </li>
                <li className='navigation-menu__item'>
                    <Link className='item__link' to='/basket'>Basket</Link>
                </li>
                
            </ul>
            <div className='header__hamburger' onClick={handleClick}>
                {click ? (<FaTimes className='hamburger__icon' />) : (<FaBars className='hamburger__icon' />)}

            </div>
        </div>
    )
}

export default Navbar