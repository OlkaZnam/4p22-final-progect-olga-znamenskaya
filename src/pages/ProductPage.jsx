import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CatalogImage from '../components/CatalogImage/CatalogImage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <CatalogImage heading='CATALOG' text='Find your Perfect Plant' />
            <Product />
            <Footer />
        </div>
    )
}

export default ProductPage