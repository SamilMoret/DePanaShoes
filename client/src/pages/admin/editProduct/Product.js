import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./Product.css"

const URI = 'http://localhost:3001/products/';

export const Product = (props) => {
    const { id, nome, preco, img1, img2, img3, stockMax, stockMin } = props.data; 
    const [priceHook, setPrice] = useState(preco); 
    const [maxStock, setMaxS] = useState(stockMax);
    const [minStock, setMinS] = useState(stockMin);
    const [newimg1, setNewimg1] = useState()
    const [newimg2, setNewimg2] = useState()
    const [newimg3, setNewimg3] = useState()
    

    const update = async (e) => { 
        e.preventDefault();
        await axios.put(URI+id, { preco: priceHook, stockMax: maxStock, stockMin: minStock, img1:newimg1, img2:newimg2, img3:newimg3 });
        window.location.reload()
    }

    return (
        <div className="product">
            <div className="slide-var">
                <ul>
                    <li><img src={img1} alt={nome}/></li>
                    <li><img src={img2} alt={nome}/></li>
                    <li><img src={img3} alt={nome}/></li>
                </ul>
            </div>
            <div className="description"> 
                <p> 
                    <b>{nome}</b> 
                </p>
                <p> R${preco}</p>
                <p> Max Stock: {stockMax}</p>
                <p> Min Stock: {stockMin}</p>
                <form onSubmit={update} action="/auth" method="post"> 
                    <input 
                    onChange={ (e) => setPrice(e.target.value)} 
                    type="number" name="pass" id="pass" placeholder="Novo Preco"/>
                    <input 
                    onChange={ (e) => setMaxS(e.target.value)} 
                    type="number" name="pass" id="pass" placeholder="Novo MaxStock"/>
                    <input 
                    onChange={ (e) => setMinS(e.target.value)} 
                    type="number" name="pass" id="pass" placeholder="Novo MinStock"/>
                    <input type="submit" className="btn-login" value="Edit" /> 
                   <input type="text" onChange={(e)=> setNewimg1(e.target.value)} placeholder="îmage 1" />
                   <input type="text" onChange={(e)=> setNewimg2(e.target.value)} placeholder="îmage 2" />
                   <input type="text" onChange={(e)=> setNewimg3(e.target.value)} placeholder="îmage 3" />
                </form>
            </div>
        </div> 
    );
};