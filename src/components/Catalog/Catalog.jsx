import React, { useEffect, useState } from 'react'
import './CatalogStyles.css'
import CatalogBody from '../CatalogBody/CatalogBody'
import CatalogFilter from '../CatalogFilter/CatalogFilter'


export const defaultCategory = 'All'
export const apiUrl = 'http://127.0.0.1:9001/test'

const Catalog = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, SetCategories] = useState([defaultCategory])
    const [activeCategory, setActiveCategory] = useState([defaultCategory])

    const getCategoriesFromProducts = (products) => {
        const allCategoryNames = products.map(({ category }) => category)
        const uniqueCategoryNames = new Set(allCategoryNames)
        return Array.from(uniqueCategoryNames)
    }

    const fetchProducts = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                const newProducts = result.map((product) => ({
                    ...product
                }))
                const newCategories = getCategoriesFromProducts(newProducts)
                setProducts(newProducts)
                setFilteredProducts(newProducts)
                SetCategories([...categories, ...newCategories])
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='catalog'>
            <CatalogFilter
                products={products}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <CatalogBody products={filteredProducts} />
        </div>
    )
}

export default Catalog