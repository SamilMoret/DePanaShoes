import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const ShopContext = createContext(null);
const URI = 'http://localhost:3001/products/';

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < 12 ; i++) {
        cart[i] = 0
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 
    const [payAumount,setPayAumount] = useState(0);

    const[products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, []);

    const [logged, setLogged] = useState(0);
    const loggedChanger = (value) => setLogged(value);

    const [admin, setAdmin] = useState(false);
    const AdminChanger = (value) => setAdmin(value);
    
    const getProducts = async () => {
        const res = await axios.get(URI)
        setProducts(res.data);

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item)); 
                totalAmount += cartItems[item] * itemInfo.preco; 
            }
        }
 
        return totalAmount;
    };

    const addToCart = async (itemId) => { 
        await axios.get('http://localhost:3001/products/book/'+ itemId + '?f=book')
        .then(({ data }) => {
            data==='Booked' ? setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 })) : void(0);
            data==='Stockout' ? alert('Empty product') : void(0); 
        })
        .catch(error => {
            console.log(error.message);
        }) 
    };

    const removeFromCart = async (itemId) => {
        await axios.get('http://localhost:3001/products/book/'+ itemId + '?f=unbook')
        .then(({ data }) => {
            data==='Unbooked' ? setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 })) : void(0);
        })
        .catch(error => {
            console.log(error.message);
        }) 
    };

    const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount, loggedChanger, logged, AdminChanger, admin, payAumount,setPayAumount};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};