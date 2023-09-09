import React from "react";

export const Product = (props) => {
    const { nome, preco, descripcao, img1, img2, img3 } = props.data; 
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
                <p>{descripcao}</p>
            </div>
            <div className="description"> 
                <p> 
                    <b>{nome}</b> 
                </p>
                <p> ${preco}</p>
            </div>
        </div> 
    );
};