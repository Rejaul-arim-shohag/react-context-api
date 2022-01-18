import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Counter = () => {
    const {category} = useContext(UserContext)
    return (
        <div>
            <h1>This is counter :{category}</h1>
        </div>
    );
};

export default Counter;