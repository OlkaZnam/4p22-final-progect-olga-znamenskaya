import React from 'react'
import Header from '../components/Header/Header'
import CatalogImage from '../components/CatalogImage/CatalogImage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'

const ProductPage = () => {
    return (
        <div>
            <Header />
            <CatalogImage heading='CATALOG' text='Find your Perfect Plant' />
            <Product />
            <Footer />
        </div>
    )
}

export default ProductPage