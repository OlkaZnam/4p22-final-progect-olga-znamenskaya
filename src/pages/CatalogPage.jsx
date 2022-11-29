import React from 'react'
import Header from '../components/Header/Header'
import CatalogImage from '../components/CatalogImage/CatalogImage'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'

const CatalogPage = () => {
    return (
        <div>
            <Header />
            <CatalogImage heading='CATALOG' text='Find your Perfect Plant' />
            <Catalog />
            <Footer />
        </div>
    )
}

export default CatalogPage