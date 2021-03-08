import logo from './logo.svg';
import './App.css';
import Header from './Competent/Header/Header';
import Home from './Competent/Home/Home';
import Shipment from './Competent/Shipment/Shipment';
import React, { createContext, useState } from 'react';


export const CategoryContext =createContext();

function App() {
  const [count,setCount]=useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <h4>Count Value:{count}</h4>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
       
    </CategoryContext.Provider>
  );
}

export default App;
