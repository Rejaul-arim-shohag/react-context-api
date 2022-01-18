import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Detail from '../Detail/Detail';

const Category = () => {
    const { category,setCategory } = useContext(UserContext)
    return (
        <div>
            <h2>This is Category :{category}</h2>
            <button onClick={() => setCategory("Laptop")}>Laptop</button>
            <button onClick={() => setCategory("Phone")}>Phone</button>
            <button onClick={() => setCategory("Camera")}>Camera</button>
            <Detail></Detail>
        </div>
    );
};

export default Category;