import React from 'react'
import { FaRegFrown } from 'react-icons/fa'
import ProductCard from '../ProductCard/ProductCard'
import './CatalogBodyStyles.css'

const CatalogBody = (props) => {
    const {
        products = []
    } = props

    const hasProducts = products.length > 0

    return (
        <div className="catalog-body">
            {hasProducts ? (
                <ul className="catalog-body__list">
                    {products.map((product) => {
                        const {
                            id,
                            title,
                            imageUrl,
                            price,
                            category,
                            description
                        } = product

                        return (
                            <li className='catalog-body__item' key={id}>
                                <ProductCard
                                    id={id}
                                    title={title}
                                    img={imageUrl}
                                    price={price}
                                    category={category}
                                    description={description}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <div className='catalog-body__empty-message'>
                    Houseplants are not found
                    <FaRegFrown className='catalog-body__icon' />
                </div>
            )}
        </div>
    )
}

export default CatalogBody