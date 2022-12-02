import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CatalogBody from '../CatalogBody/CatalogBody'
import CatalogFilter from '../CatalogFilter/CatalogFilter'
import Pagination from '../Pagination/Pagination'
import './CatalogStyles.css'

export const defaultCategory = 'All'

export const apiUrl = 'https://shadyrun.alaiya.ru/kaktusss'
// export const apiUrl = `/${process.env.PUBLIC_URL}./API.json`

const Catalog = () => {
    const [products, setProducts] = useState([])

    const [categories, SetCategories] = useState([defaultCategory])
    const [activeCategory, setActiveCategory] = useState(defaultCategory)

    const [filteredProducts, setFilteredProducts] = useState([])

    const itemsPerPage = 9

    const [searchParams, setSearchParams] = useSearchParams()

    const page = parseInt(searchParams.get('page') ?? 1)

    const filteredVisibleProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

    const setPageNumber = (pageNumber) => {
        setSearchParams({ page: pageNumber.toString() })
    }

    const getCategoriesFromProducts = (products) => {
        const allCategoryNames = products.map(({ category }) => category)
        const uniqueCategoryNames = new Set(allCategoryNames)
        return Array.from(uniqueCategoryNames)
    }

    const fetchProducts = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                const newProducts = result
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

            <CatalogBody products={filteredVisibleProducts} />

            <Pagination
                totalPages={totalPages}
                currentPage={page}
                setPageNumber={setPageNumber}
            />
        </div>
    )
}

export default Catalog