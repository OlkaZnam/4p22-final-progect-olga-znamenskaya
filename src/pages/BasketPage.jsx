import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BasketImage from '../components/BasketImage/BasketImage'
import Basket from '../components/Basket/Basket'
import Footer from '../components/Footer/Footer'

const BasketPage = () => {
    return (
        <div>
            <Navbar />
            <BasketImage heading='Basket' text='Buy your Perfect Plant' />
            <Basket />
            <Footer />
        </div>
    )
}

export default BasketPage