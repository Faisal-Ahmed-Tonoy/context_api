import React from 'react';

const CategoryDetail = (props) => {
    const{count}=props;
    return (
        <div>
             <h6>This is Your Category :{count} </h6>
            
        </div>
    );
};

export default CategoryDetail;