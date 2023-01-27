import React,{useState,createContext} from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import Foods from './pages/Foods'
import Contact from './pages/Contact'
import Cart from './pages/Cart';
import Orders from './pages/Orders'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const store = createContext();




function App() {


  const [cartItems,setCartItems] = useState([]);
  const [orderslist,setOrderslist] = useState([]);

  return (
    <div className="App">

      <store.Provider value={{cartItems,setCartItems,orderslist,setOrderslist}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/foods" element={<Foods/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
      </store.Provider>




      <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      
    </div>
  );
}

export default App;
