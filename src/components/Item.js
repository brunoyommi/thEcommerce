import './Item.css';
import React from 'react';
import { useEffect, useState } from 'react';


export default function Item() {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async()=> {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    

    return (
        <>
            <div className="itemContainer container">
                {products.map((product,i)=>
                    <div className="productCard card text-white bg-dark">
                    <div className="card-header">{product.title}</div>
                    <div className="card-body">
                      {/* <h5 className="card-title" key={i}>{product.image}</h5> */}
                      <img src={product.image}/>
                      <p className="card-text" key={i}>{product.category}</p>
                    </div>
                  </div>
                )}                              
            </div>
        </>
    )
}