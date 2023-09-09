import React from 'react';
import { Product } from './productAddtoCart';
import './shopAddtoCart.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products/'; 

export const ShopAddtoCart = () => {

    const[products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>DePanaShoes</h1>
            </div>
            <div className="products"> 
                {products.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
};