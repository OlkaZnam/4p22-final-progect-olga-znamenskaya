import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context'
import './BasketStyles.css'
import { apiUrl } from '../Catalog/Catalog'

const Basket = () => {
    const {
        basketItems,
        setBasketItems
    } = useContext(AppContext)



    const totalAmount = basketItems.reduce((total, { amount }) => total += amount, 0)
    const [products, setProducts] = useState([])


    const fetchProducts = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                const allProducts = result
                const newProducts = []

                allProducts.forEach((product) => {
                    const productInBasket = basketItems.find(({ id }) => id === product.id)


                    if (productInBasket) {
                        const { amount } = productInBasket

                        newProducts.push({
                            ...product,
                            amount
                        })
                    }
                })

                setProducts(newProducts)
            })
    }

    const onRemoveProductButtonClick = (productId) => {
        const newBasketItems = basketItems.filter((basketItem) => basketItem.id !== productId)
        const newProducts = products.filter(({ id }) => id !== productId)

        setBasketItems(newBasketItems)
        setProducts(newProducts)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='basket'>

            <ul>
                {products.map((product) => {
                    const {
                        id,
                        title,
                        imageUrl,
                        price,
                        amount
                    } = product

                    return (
                        <li className='basket'>
                            <div className='basket__container'>
                                <img src={imageUrl}
                                    alt='title'
                                    width={150}
                                    height={180}
                                    loading='lazy' />
                                <div>{title}</div>
                                <div>Price: {price} x {amount}</div>
                                <div>Total: {price * amount}</div>
                                <button className='button' onClick={() => onRemoveProductButtonClick(id)}>X</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
            <div className='basket__item'>Total amount: {totalAmount}</div>
        </div>
    )
}

export default Basket