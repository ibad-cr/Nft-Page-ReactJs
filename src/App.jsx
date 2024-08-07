import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './page/Home'
import Shop from './page/Shop'
import ShopSingleCard from './components/ShopComponents/ShopSingleCard'
import ShopLeftSide from './components/ShopComponents/ShopLeftSIde'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/shop/shopSingleCard' element={<ShopSingleCard />}></Route>
          <Route path='/shop/shopSingleCard/shopLeftSide' element={<ShopLeftSide />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App