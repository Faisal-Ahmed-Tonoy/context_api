import React, { createContext, useContext } from 'react';
import Category from '../Category/Category';
import { CategoryContext } from '../../App';



const Home = () => {
    const category=  useContext(CategoryContext);
    
    
    
   
   
    return (
        <div style={{border: '1px solid purple',
        margin:'2px'}}>
            <h2>This is Home : {category}</h2>
            <Category></Category>
            
        </div>
    );
};

export default Home;