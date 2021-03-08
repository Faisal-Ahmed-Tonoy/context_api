import React from 'react';
import Category from '../Category/Category';

const Home = (props) => {
    const {count} =props;
    return (
        <div style={{border: '1px solid purple',
        margin:'2px'}}>
            <h2>This is Home : {count}</h2>
            <Category count={count}></Category>
            
        </div>
    );
};

export default Home;