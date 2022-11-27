import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CardStyles.css'
import { FaShoppingCart } from 'react-icons/fa'
import AppContext from '../../context'
import { type } from '@testing-library/user-event/dist/type'

const Card = (props) => {
    const {
        id,
        title,
        img,
        price,
        category,
        description
    } = props

    const {
        basketItems,
        setBasketItems
    } = useContext(AppContext)

    const href = `/catalog/${id}`

    const onBuyButtonClick = () => {
        const existingBasketProductIndex = basketItems.findIndex((basketItem) => basketItem.id === id)
        const isExistInBasket = existingBasketProductIndex >= 0 && typeof existingBasketProductIndex === 'number'
        let newBasketItems = [...basketItems]

        if (isExistInBasket) {
            newBasketItems[existingBasketProductIndex].amount++
        } else {
            newBasketItems = [...newBasketItems, {
                id,
                amount: 1
            }]
        }

        setBasketItems(newBasketItems)

    }

    return (
        <article className='card' key={id}>
            <div className='card-category'>{category}</div>

            <img
                className='card__image'
                src={img}
                alt={title}
                width='220'
                height='240'
                loading='lazy'
            />
            <Link
                to={href}
                title='Link to the product card'
                aria-label='Link to the product card'
            >
                <div className='card__inner-container'>
                    <div className='card__title'>{title}</div>
                    <div className='card__description' title={description}>{description}</div>
                    <div className='card__price'>{price}</div>
                </div>
            </Link>
            <button
                className='card-button button'
                type='button'
                onClick={() => onBuyButtonClick()}
            >
                <FaShoppingCart className='card__icon' />
                <span>Add to basket</span>
            </button>
        </article >

    )
}

export default Card