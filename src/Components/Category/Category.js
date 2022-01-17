import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Detail from '../Detail/Detail';

const Category = () => {
    const {count} = useContext(UserContext)
    return (
        <div>
            <h2>This is Category{count}</h2>
            <Detail></Detail>
        </div>
    );
};

export default Category;