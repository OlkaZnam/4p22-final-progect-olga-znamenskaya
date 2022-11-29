import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import { defaultCategory } from '../Catalog/Catalog'
import './CatalogFilterStyles.css'

const CatalogFilter = (props) => {
    const {
        products,
        setFilteredProducts,
        categories,
        activeCategory,
        setActiveCategory
    } = props

    const onInputChange = ({ target }) => {
        setSearchQuery(target.value)
    }

    const onCategoryButtonClick = (categoryName) => {
        setActiveCategory(categoryName)
    }

    const [searchQuery, setSearchQuery] = useState('')

    const filter = () => {
        const newFilteredProducts = products.filter(({ title, category }) => {
            const isCategoryTheSame = category === activeCategory
            const isDefaultCategory = activeCategory === defaultCategory
            const nameFormatted = title.toLowerCase()
            const searchQueryFormatted = searchQuery.toLowerCase()
            const isNameIncludesSearchQuerry = nameFormatted.includes(searchQueryFormatted)
            console.log(defaultCategory)

            return (isCategoryTheSame || isDefaultCategory) && isNameIncludesSearchQuerry
        })
        setFilteredProducts(newFilteredProducts)
    }

    useEffect(() => {
        filter()
    }, [searchQuery, activeCategory])

    return (
        <div className='catalog-filter'>
            < Input
                placeholder='What are you looking for?'
                value={searchQuery}
                onChange={onInputChange}
            />

            <div className='catalog-filter__categories'>
                {categories.map((categoryName) => {
                    const isActive = categoryName === activeCategory
                    let classNameFormatted = 'catalog-filter__category-button button'
                    if (isActive) {
                        classNameFormatted += ' is-active'
                    }

                    return (
                        <button
                            key={categoryName}
                            className={classNameFormatted}
                            type='button'
                            onClick={() => onCategoryButtonClick(categoryName)}
                        >
                            {categoryName}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CatalogFilter