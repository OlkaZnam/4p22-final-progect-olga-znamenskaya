import React from 'react'
import Header from '../components/Header/Header'
import BasketImage from '../components/BasketImage/BasketImage'
import Basket from '../components/Basket/Basket'
import Footer from '../components/Footer/Footer'

const BasketPage = () => {
    return (
        <div>
            <Header />
            <BasketImage heading='Basket' text='Buy your Perfect Plant' />
            <Basket />
            <Footer />
        </div>
    )
}

export default BasketPage