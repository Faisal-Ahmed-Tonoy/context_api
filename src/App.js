import logo from './logo.svg';
import './App.css';
import Header from './Competent/Header/Header';
import Home from './Competent/Home/Home';
import Shipment from './Competent/Shipment/Shipment';
import React, { createContext, useState } from 'react';


export const CategoryContext =createContext();

function App() {
  const [category,setCategory]=useState(0);
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <h4>Count Value:{category}</h4>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
       
    </CategoryContext.Provider>
  );
}

export default App;
