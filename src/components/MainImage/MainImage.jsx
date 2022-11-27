import React from 'react'
import { Link } from 'react-router-dom'
import './MainImageStyles.css'

import BackgroundImage from '../../assets/main.avif'

const MainImage = () => {
    return (
        <div className='main-image__container'>
            <img className='container__image' src={BackgroundImage} alt='plants' loading='lazy' />
            <div className='container__content'>
                <h1 className='content__header'>Plants Planet</h1>
                <p className='content__inner-text'>Here is an awesome houseplants shop!</p>
                <Link to='/catalog' className='main-image__button button'>Catalog</Link>
                <Link to='/contact' className='main-image__button button'>Contact Us</Link>
            </div>
        </div>
    )
}

export default MainImage