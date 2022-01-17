import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Category from '../Category/Category';

const Header = () => {
    const {count} = useContext(UserContext)
    return (
        <div>
            <h1>This is Header{count}</h1>
            <Category></Category>
        </div>
    );
};

export default Header;