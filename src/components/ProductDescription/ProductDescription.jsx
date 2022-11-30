import React, { useContext } from 'react'
import AppContext from '../../context'
import { FaShoppingCart } from 'react-icons/fa'
import Counter from '../Counter/Counter'
import './ProductDescriptionStyles.css'

const ProductDescription = (props) => {
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
        addToBasket,
        increaseBasketItem,
        decreaseBasketItem
    } = useContext(AppContext)

    const amount = basketItems[id] ?? 0
    const isExistInBasket = amount > 0

    const onBuyButtonClick = () => { addToBasket(id) }

    return (
        <article className='product-description' key={id}>
            <h1 className='product-description__title'>{title}</h1>

            <div className='product-description__container'>
                <div className='product-description__category'>{category}</div>
                <img
                    className='product-description__image'
                    src={img}
                    alt={title}
                    width='500'
                    loading='lazy'
                />
            </div>

            <div className='product-description__info'>{description}</div>
            <div className='product-description__price'>Price: £{price}</div>

            {isExistInBasket && (
                <Counter
                    value={amount}
                    onIncrease={() => increaseBasketItem(id)}
                    onDecrease={() => decreaseBasketItem(id)}
                />
            )}

            <button
                className='product-description__button button'
                type='button'
                onClick={() => onBuyButtonClick()}
            >
                <FaShoppingCart className='product-description__icon' />
                <span>Add to basket</span>
            </button>
        </article>
    )
}

export default ProductDescription