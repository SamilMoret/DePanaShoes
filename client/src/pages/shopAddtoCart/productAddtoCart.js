import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, nome, preco, descricao, img1, img2, img3 } = props.data; 
    const { addToCart, cartItems} = useContext(ShopContext); 

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <div className="slide-var"> 
                <ul>
                    <li><img src={img1} alt={nome}/></li>
                    <li><img src={img2} alt={nome}/></li>
                    <li><img src={img3} alt={nome}/></li>
                </ul>
            </div>
            <div className="descripcion">
                <p>{descricao}</p>
            </div>
            <div className="description"> 
                <p> 
                    <b>{nome}</b> 
                </p>
                <p> ${preco}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} 
            </button>
        </div> 
    );
};