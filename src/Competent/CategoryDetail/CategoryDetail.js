import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
  const{name} =props.product
   
    return (
        <div>
             <h6>This is Your Category : </h6>
             <p>Selected Product : {name}</p>
            
        </div>
    );
};

export default CategoryDetail;