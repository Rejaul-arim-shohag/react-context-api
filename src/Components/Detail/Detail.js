import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Detail = () => {
     const {count, setCount} = useContext(UserContext);
     
    return (
        
            <div>
                <h3>This is detail {count}</h3>
                <button onClick={()=>setCount(count+1)}>increase</button>
            </div>
        
    );
};

export default Detail;