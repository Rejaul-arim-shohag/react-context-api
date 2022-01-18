import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Category from '../Category/Category';

const Header = () => {
    const {category} = useContext(UserContext)
    return (
        <div>
            <h1>This is Header :{category}</h1>
            <Category></Category>
        </div>
    );
};

export default Header;