import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';


const allProducts= [{name:'Lenovo', category:'laptop'},{name:'Asus', category:'laptop'},{name:'Dell', category:'laptop'},
{name:'Samsung', category:'mobile'},{name:'Nokia', category:'mobile'},{name:'Apple', category:'mobile'},
{name:'Canon', category:'camera'},{name:'Nikon', category:'camera'},{name:'Sony', category:'camera'}]

const Category = () => {
    const [category] =useContext(CategoryContext);
    const [products,setProducts]=useState([]);
    useEffect(() =>{
        const matchedProducts  = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);

    },[category])
    
    return (
        <div>
            <h5>This is Your Category :{category} </h5>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
            
        </div>
    );
};

export default Category;