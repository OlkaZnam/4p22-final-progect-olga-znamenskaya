import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa'
import './HeaderStyles.css'

const Header = () => {
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
        <div className={color ? 'header header--background' : 'header'}>
            <NavLink to='/'>
                <h1>
                    <FaSeedling className='header__icon' />
                    PP
                </h1>
            </NavLink>
            <ul className={click ? 'navigation-menu active' : 'navigation-menu'}>
                <li className='navigation-menu__item'>
                    <NavLink className='item__link' to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='navigation-menu__item'>
                    <NavLink className='item__link' to='/catalog'>
                        Catalog
                    </NavLink>
                </li>
                <li className='navigation-menu__item'>
                    <NavLink className='item__link' to='/contact'>
                        Contact Us
                    </NavLink>
                </li>
                <li className='navigation-menu__item'>
                    <NavLink className='item__link' to='/basket'>
                        Basket
                    </NavLink>
                </li>
            </ul>

            <div className='header--hamburger' onClick={handleClick}>
                {click ? (<FaTimes className='hamburger__icon' />) : (<FaBars className='hamburger__icon' />)}
            </div>
        </div>
    )
}

export default Header