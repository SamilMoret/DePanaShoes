import React from 'react';
import { Product } from './Product';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products'; 

export const EditProduct = () => {

    const[products, setProducts] = useState([]) 
    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {
        const res = await axios.get(URI)
        setProducts(res.data.data)
    }
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Editar Produtos</h1>
            </div>
            <div className="products"> 
                {products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    )
};