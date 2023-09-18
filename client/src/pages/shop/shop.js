import React from 'react';
import { Product } from './product';
import './shop.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products';  

export const Shop = () => {

    const[productos,setProducts] = useState([]) 
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => { 
        const res = await axios.get(URI)
        setProducts(res.data.data)
    }

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>DePanaShoes</h1>
            </div>
            <div className="products"> 
                {!!productos && productos.map((product) => (
                    <Product key={product.id} data={product} />  
                ))}
            </div>
        </div>
    )
};