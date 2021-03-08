import logo from './logo.svg';
import './App.css';
import Header from './Competent/Header/Header';
import Home from './Competent/Home/Home';
import Shipment from './Competent/Shipment/Shipment';
import React, { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h4>Count Value:{count}</h4>
      <Header count={count} setCount={setCount}></Header>
      <Home  count={count}></Home>
      <Shipment></Shipment>
       
    </div>
  );
}

export default App;
