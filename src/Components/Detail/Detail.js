import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CategoryDetail from '../../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: "Asus", category: "laptop"}, {name: "Lenevo", category:"laptop"}, {name:"Hp", category:"laptop"},
    {name: "samsung", category: "phone"}, {name: "xaomi", category:"phone"}, {name:"Huewei", category:"phone"},
    {name: "Canon", category: "camera"}, {name: "Nikon", category:"camera"}, {name:"Sony", category:"camera"}
]
const Detail = () => {
     const {category} = useContext(UserContext);
     const [products, setProducts] = useState([]);
     useEffect(()=>{
        const matchedProduct = allProducts.filter((product)=>product.category.toLowerCase()===category.toLowerCase());
        setProducts(matchedProduct)
     },[category])
     
    return (
            <div>
                <h3>This is detail :{category}</h3>

                {
                    products.map((pd)=><CategoryDetail product={pd}></CategoryDetail>)
                }
            </div>
        
    );
};

export default Detail;