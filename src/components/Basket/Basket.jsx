import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context'
import './BasketStyles.css'
import { apiUrl } from '../Catalog/Catalog'
import BasketCard from '../BasketCard/BasketCard'
import {FaRegSadTear} from 'react-icons/fa'


const Basket = () => {
    const { basketItems } = useContext(AppContext)

    const uniqueBasketItems = Object.keys(basketItems).length

    const totalAmount = Object.values(basketItems).reduce((total, amount) => total += amount, 0)

    const [products, setProducts] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const updateProductsAmountValues = () => {
        const newProducts = products.map((product) => ({
            ...product,
            amount: basketItems[product.id]
        }))

        setProducts(newProducts)
    }

    const updateTotalPrice = () => {
        const newTotalPrice = products.reduce((total, { amount, price }) => total += amount * price, 0)
        const newTotalPriceFormatted = newTotalPrice.toFixed(2)

        setTotalPrice(newTotalPriceFormatted)
    }

    const fetchProducts = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                const allProducts = result
                const newProducts = []

                allProducts.forEach((product) => {

                    const id = product.id

                    const isExistInBasket = basketItems.hasOwnProperty(id)

                    if (isExistInBasket) {
                        newProducts.push({
                            ...product,
                            amount: basketItems[id]
                        })
                    }
                })

                setProducts(newProducts)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [uniqueBasketItems])

    useEffect(() => {
        updateProductsAmountValues()
    }, [basketItems])

    useEffect(() => {
        updateTotalPrice()
    }, [products])

    return (
        <div className="basket">
            <div className="basket__body">
                {products.length ? (
                    <ul className="basket__list">
                        {products.map((product) => {
                            const {
                                category,
                                title,
                                price,
                                id,
                                amount,
                                imageUrl
                            } = product

                            return (
                                <li className="basket__item" key={id}>
                                    <BasketCard
                                        title={title}
                                        category={category}
                                        price={price}
                                        id={id}
                                        amount={amount}
                                        img={imageUrl}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="basket__empty-message">
                        Basket is empty
                        <FaRegSadTear className='empty-message__icon' />
                    </div>
                )}
            </div>
            <div className="basket__summary">
                <div className="basket__summary-info">
                    Subtotal for {totalAmount} items: £{totalPrice}
                </div>
                <button className="basket__summary-submit-button button" type="button">
                    Place an order
                </button>
            </div>
        </div>

    )

}

export default Basket