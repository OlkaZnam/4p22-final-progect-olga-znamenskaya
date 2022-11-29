import React from 'react'
import './CounterStyles.css'

const Counter = (props) => {
  const {
    value,
    onDecrease,
    onIncrease,
  } = props

  return (
    <div className='counter'>
      <button
        className="counter__button counter__button--decrease button"
        type="button"
        title="Decrease amount"
        onClick={onDecrease}
      >
        –
      </button>

      <div className="counter__value">{value}</div>

      <button
        className="counter__button counter__button--increase button"
        type="button"
        title="Increase amount"
        onClick={onIncrease}>
        +
      </button>
    </div>
  )
}

export default Counter