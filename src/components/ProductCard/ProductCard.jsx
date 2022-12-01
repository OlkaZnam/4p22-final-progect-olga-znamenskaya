import React, { useContext } from 'react'
import AppContext from '../../context'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import Counter from '../Counter/Counter'
import './ProductCardStyles.css'

const ProductCard = (props) => {
    const {
        id,
        title,
        img,
        price,
        category,
        description
    } = props

    const href = `/catalog/${id}`

    const {
        basketItems,
        addToBasket,
        increaseBasketItem,
        decreaseBasketItem
    } = useContext(AppContext)

    const amount = basketItems[id] ?? 0
    const isExistInBasket = amount > 0

    const onBuyButtonClick = () => { addToBasket(id) }

    return (
        <article
            className='product-card'
            key={id}
        >
            <div className='product-card__category'>{category}</div>

            <Link
                className='product-card__link'
                to={href}
                title='Link to the product card description'
                aria-label='Link to the product card description'
            >
                <img
                    className='product-card__image'
                    src={img}
                    alt={title}
                    width='220'
                    height='240'
                    loading='lazy'
                />

                <div className='product-card__container'>
                    <div className='product-card__title'>{title}</div>
                    <div className='product-card__description' title={description}>{description}</div>
                    <div className='product-card__price'>£{price}</div>
                </div>
            </Link>

            {isExistInBasket ? (
                <div className='product-card__counter'>
                    <span>In basket:</span>
                    <Counter
                        value={amount}
                        onIncrease={() => increaseBasketItem(id)}
                        onDecrease={() => decreaseBasketItem(id)}
                    />
                </div>
            ) : (
                <button
                    className='product-card__button button'
                    type='button'
                    onClick={() => onBuyButtonClick()}
                >
                    <FaShoppingCart className='product-card__icon' />
                    <span>Add to basket</span>
                </button>)}
        </article >
    )
}

export default ProductCard