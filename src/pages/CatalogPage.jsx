import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CatalogImage from '../components/CatalogImage/CatalogImage'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'

const CatalogPage = () => {
    return (
        <div>
            <Navbar />
            <CatalogImage heading='CATALOG' text='Find your Perfect Plant' />
            <Catalog />
            <Footer />
        </div>
    )
}

export default CatalogPage