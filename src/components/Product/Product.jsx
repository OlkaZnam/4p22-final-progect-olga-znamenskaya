import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { apiUrl } from '../Catalog/Catalog'
import ProductDescription from '../ProductDescription/ProductDescription'

import './ProductStyles.css'

const Product = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {
        title,
        imageUrl,
        price,
        category,
        description
    } = product

    const fetchProductInfo = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                const productFind = result.find((item) => item.id.toString() === id.toString())
                setProduct(productFind)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchProductInfo()
    }, [])



    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <ProductDescription
                id={id}
                title={title}
                img={imageUrl}
                price={price}
                category={category}
                description={description}
            />

        </div>
    )
}

export default Product