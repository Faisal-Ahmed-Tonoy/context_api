import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
  const category=  useContext(CategoryContext);
   
    return (
        <div>
             <h6>This is Your Category : </h6>
             <p>Selected Category : {category}</p>
            
        </div>
    );
};

export default CategoryDetail;