import React from 'react';

const CategoryDetail = (props) => {
    const {name}= props.product
    return (
        <div>
            <h5>This is category Detail</h5>
            <h5>Your Selected product : {name}</h5>
        </div>
    );
};

export default CategoryDetail;