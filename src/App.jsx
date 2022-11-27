import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import BasketPage from './pages/BasketPage'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './context'
import { defaultContextValue } from './context'

function App() {

  const [basketItems, setBasketItems] = useState([])

  return (

    <AppContext.Provider
      value={{
        basketItems,
        setBasketItems
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
