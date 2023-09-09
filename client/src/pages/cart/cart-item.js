import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"; 

export const CartItem = (props) => {
    const { id, nome, preco, img1 } = props.data; 
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    return  (
        <div className="cartItem">
            <img src={img1} />
            <div className="description">
                <p> 
                    <b> {nome} </b>
                </p>
                <p> ${preco} </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};