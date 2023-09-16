import React, {useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import "./card.css"; 
import { useNavigate } from 'react-router-dom' 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'http://localhost:3001/products/';

export const Cart = () => {
    const context = useContext(ShopContext);
    const { cartItems, getTotalCartAmount } = useContext(ShopContext); 
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const[products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    const buy = async (e) => {
        e.preventDefault();
        console.log(cartItems);
        await axios.put(URI + 'buy', {
            "1": cartItems[1],
            "2": cartItems[2],
            "3": cartItems[3],
            "4": cartItems[4],
            "5": cartItems[5],
            "6": cartItems[6],
            "7": cartItems[7],
            "8": cartItems[8],
            "9": cartItems[9],
            "10": cartItems[10],
        })
        .then((res) => {
            alert(res);
        }).catch((err) => {
            alert(err.message)
        });
        context.setPayAumount(totalAmount);
        navigate('/stripe');
    }

    return (
        <div className="cart">
            <div> 
                <h1> Itens do Seu Carrinho </h1>
            </div>
            <div className="cartItems">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ? 
            <div className="checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate ("/shop")}> Continue Comprando</button>
                <button onClick={buy}> Confira </button>
            </div>
            : <h1> Seu Carrinho está vazio </h1>}
        </div>
    )
};