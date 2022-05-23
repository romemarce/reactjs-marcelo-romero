import 'bulma/css/bulma.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import CartListContainer from './components/pages/CartListContainer';
import ErrorContainer from './components/pages/ErrorContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import ItemListContainer from './components/pages/ItemListContainer';
import DefaultLayout from './layout/Default';
const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartListContainer />} />

          <Route path='/*' element={<ErrorContainer />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
