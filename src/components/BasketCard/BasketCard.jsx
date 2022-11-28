import React, { useContext } from 'react'
import Counter from '../Counter/Counter'
import AppContext from '../../context'
import './BasketCardStyles.css'

const BasketCard = (props) => {
  const {
    id,
    img,
    title,
    category,
    price,
    amount,
  } = props

  const {
    removeFromBasket,
    increaseBasketItem,
    decreaseBasketItem,
  } = useContext(AppContext)

  const total = (price * amount).toFixed(2)

  return (
    <article className="basket-card">
      <img
        className="basket-card__image"
        src={img}
        alt={title}
        width="150"
        height="180"
        loading="lazy"
      />

      <div className="basket-card__title">{title}</div>
      <div className="basket-card__category">{category}</div>



      <div className="basket-card__price-summary">Price: £{price.toFixed(2)}</div>

      <Counter
        className="basket-card__counter"
        value={amount}
        onDecrease={() => decreaseBasketItem(id)}
        onIncrease={() => increaseBasketItem(id)}
      />
      <div className="basket-card__total-price">Total: £{total}</div>

      <button
        className="basket-card__remove-button button"
        title="Remove product"
        aria-label="Remove product"
        onClick={() => removeFromBasket(id)}
      >
        X
      </button>

    </article>
  )
}

export default BasketCard