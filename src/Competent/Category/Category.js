import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    const{count}=props;
    return (
        <div>
            <h5>This is Your Category : </h5>
             <CategoryDetail count={count}></CategoryDetail>
            
        </div>
    );
};

export default Category;