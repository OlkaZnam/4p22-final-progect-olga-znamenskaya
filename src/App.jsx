import React, { useState } from 'react'
import AppContext from './context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import BasketPage from './pages/BasketPage'

function App() {
  const [basketItems, setBasketItems] = useState({})

  const addToBasket = (id) => {
    const newBasketItems = { ...basketItems }
    const isAlreadyExistInBasket = newBasketItems.hasOwnProperty(id)

    isAlreadyExistInBasket
      ? newBasketItems[id] += 1
      : newBasketItems[id] = 1

    setBasketItems(newBasketItems)
  }

  const removeFromBasket = (id) => {
    const newBasketItems = { ...basketItems }

    delete newBasketItems[id]

    setBasketItems(newBasketItems)
  }

  const changeBasketAmount = (id, isIncrease = true) => {
    const newBasketItems = { ...basketItems }

    if (isIncrease) {
      newBasketItems[id]++
    } else {
      const currentAmount = newBasketItems[id]
      if (currentAmount > 1) {
        newBasketItems[id]--
      } else {
        delete newBasketItems[id]
      }
    }

    setBasketItems(newBasketItems)
  }

  const increaseBasketItem = (id) => {
    changeBasketAmount(id)
  }

  const decreaseBasketItem = (id) => {
    changeBasketAmount(id, false)
  }

  return (
    <AppContext.Provider
      value={{
        basketItems,
        setBasketItems,
        addToBasket,
        removeFromBasket,
        increaseBasketItem,
        decreaseBasketItem
      }}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/catalog/:id' element={<ProductPage />} />
          <Route path='/basket' element={<BasketPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
