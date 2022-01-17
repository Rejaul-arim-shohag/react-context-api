import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Counter = () => {
    const {count} = useContext(UserContext)
    return (
        <div>
            <h1>This is counter {count}</h1>
        </div>
    );
};

export default Counter;