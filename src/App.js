import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import { AllContext } from './components/Context/AllContext';
import CartListContainer from './components/pages/CartListContainer';
import ErrorContainer from './components/pages/ErrorContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import ItemListContainer from './components/pages/ItemListContainer';
import OrderConsult from './components/pages/OrderConsult';
import OrderContainer from './components/pages/OrderContainer';
import DefaultLayout from './layout/Default';
const App = () => {
  const [cart, setCart] = useState([])

  const addItem = (product) => {
    // Agrega / acutaliza un producto del carrito
    let existe = false
    cart.forEach((e) => {
      if (e.id === product.id) {
        existe = true
        e.amount += product.amount
      }
    })
    setCart( existe ? [...cart] : [...cart, product] )
  }
  const removeItem = (id)=>{
    setCart([...cart.filter((product)=> product.id !== id )])
  }
  const clearItems=()=>{
    setCart([])
  }
  const context = {
    cartList: {
      cart,
      addItem,
      removeItem,
      clearItems
    }
  }

  return (
    <AllContext.Provider value={context}>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartListContainer />} />
            <Route path='/order' element={<OrderConsult />} />
            <Route path='/order/:id' element={<OrderContainer />} />

            <Route path='/*' element={<ErrorContainer />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </AllContext.Provider>
  );
}

export default App;
