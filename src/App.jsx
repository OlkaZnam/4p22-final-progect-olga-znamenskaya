import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import BasketPage from './pages/BasketPage'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './context'

function App() {

  const [basketItems, setBasketItems] = useState({})

  const addToBasket = (id) => {
    const newBasketItems = { ...basketItems }
    /**
     * Проверяем наличие в объекте 'basketItems'
     * элемента с ключом 'id' через метод объекта 'hasOwnProperty',
     * возвращающий true, если элемент в объекте по переданному ключу существует
     */
    const isAlreadyExistInBasket = newBasketItems.hasOwnProperty(id)

    /**
     * В зависимости от существования товара в корзине,
     * либо увеличиваем значение на +1,
     * либо устанавливаем новое со значением 1
     */
    isAlreadyExistInBasket
      ? newBasketItems[id] += 1
      : newBasketItems[id] = 1

    setBasketItems(newBasketItems)
  }

  const removeFromBasket = (id) => {
    const newBasketItems = { ...basketItems }

    /**
     * Удаляем из копии объекта basketItems элемент по ключу 'id'
     */
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
