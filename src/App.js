import './App.css';
import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './AppComponent/Home';
import Product from './AppComponent/Product';
import Account from './AppComponent/Account';
import Create from './AppComponent/Create';
import OrderDetails from './AppComponent/OrderDetails';
import { FaPlusCircle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";

function App() {
  return (
    <>
      <section className='title'>
        <h1 className='p-4 text-3xl'>Farmeian</h1>
      </section>
      <section className='flex flex-1 item-center justify-center content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/orderdetails' element={<OrderDetails/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
      </section>
      <section className="nav">
        <ul className='flex items-center justify-between'>
            <li className='p-2  '>
              <Link to="/">{<FaHome/>}</Link>
            </li>
            <li className='p-2'>
              <Link to="/product">{<FaShopify/>}</Link>
            </li>
            <li className='p-2'>  
              <Link to="/create">{<FaPlusCircle/>}</Link>
            </li>
            <li className='p-2'>
              <Link to="/orderdetails">{<FaCartFlatbed/>}</Link>
            </li>
            <li className='p-2'>
              <Link to="/Account">{<BsPersonCircle/>}</Link>
            </li>
          </ul>
      </section>
    </>
  );
}

export default App;
