import React from 'react'
import { Link } from 'react-router-dom'
import './MainImageStyles.css'

import BackgroundImage from '../../assets/main.avif'

const MainImage = () => {
    return (
        <div className='main-image'>
            <img className='main-image__image' src={BackgroundImage} alt='plants' loading='lazy' />

            <div className='main-image__container'>
                <h1 className='container__heading'>Plants Planet</h1>
                <p className='container__text'>Here is an awesome houseplants shop!</p>
                <Link to='/catalog' className='container__button button'>Catalog</Link>
                <Link to='/contact' className='container__button button'>Contact Us</Link>
            </div>
        </div>
    )
}

export default MainImage