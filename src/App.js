import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/css/index.css';
import { AllContext } from './components/Context/AllContext';
import CartListContainer from './components/pages/CartListContainer';
import ErrorContainer from './components/pages/ErrorContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import ItemListContainer from './components/pages/ItemListContainer';
import OrderConsult from './components/pages/OrderConsult';
import OrderContainer from './components/pages/OrderContainer';
import AddCategory from './components/Panel/AddCategory';
import AddProduct from './components/Panel/AddProduct';
import ListCategories from './components/Panel/ListCategories';
import ListOreders from './components/Panel/ListOrders';
import ListProduct from './components/Panel/ListProduct';
import DefaultLayout from './layout/Default';
import PanelLayout from './layout/Panel';
import Login from './components/Panel/Login';
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

  const [user, setUser] = useState({isLogin: false, email: ""})
  const context = {
    cartList: {
      cart,
      addItem,
      removeItem,
      clearItems
    },
    userPanel: {
      user,
      setUser
    }
  }

  return (
    <AllContext.Provider value={context}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout />}>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartListContainer />} />
              <Route path='/order' element={<OrderConsult />} />
              <Route path='/order/:id' element={<OrderContainer />} />
            </Route>



            <Route path="/panel" element={<PanelLayout />} >
              <Route path="/panel/" element={<ListProduct />} /> 
              <Route path="/panel/list-product" element={<ListProduct />} /> 
              <Route path="/panel/add-product" element={<AddProduct />} /> 
              <Route path="/panel/list-category" element={<ListCategories />} /> 
              <Route path="/panel/add-category" element={<AddCategory />} /> 
              <Route path="/panel/list-order" element={<ListOreders />} /> 
            </Route>


            <Route path='/*' element={<ErrorContainer />} />
          </Routes>
      </BrowserRouter>
    </AllContext.Provider>
  );
}

export default App;
