import React from "react";
import { useState } from "react";
import axios from 'axios';

const URI = 'http://localhost:3001/products/';

export const Product = (props) => {
    const { id, nome, preco, img1, img2, img3, stockMax, stockMin } = props.data; 
    const [priceHook, setPrice] = useState(''); 
    const [maxStock, setMaxS] = useState('');
    const [minStock, setMinS] = useState('');
    const [image, setImage] = useState()
    

    const update = async (e) => { 
        e.preventDefault();
        await axios.put(URI+id+'/', { preco: priceHook, stockMax: maxStock, stockMin: minStock, img1:image });
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
                <p> ${preco}</p>
                <p> Max Stock: {stockMax}</p>
                <p> Min Stock: {stockMin}</p>
                <form onSubmit={update} action="/auth" method="post"> 
                    <input 
                    onChange={ (e) => setPrice(e.target.value)} 
                    type="text" name="pass" id="pass" placeholder="Novo Preco"/>
                    <input 
                    onChange={ (e) => setMaxS(e.target.value)} 
                    type="text" name="pass" id="pass" placeholder="Novo MaxStock"/>
                    <input 
                    onChange={ (e) => setMinS(e.target.value)} 
                    type="text" name="pass" id="pass" placeholder="Novo MinStock"/>
                    <input type="submit" className="btn-login" value="Edit" /> 
                    <input type="file" id="inputImage" accept="image/*" onChange={(event)=> {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = ()=> {
                const base64 = reader.result;
                setImage(base64)
            };

            reader.readAsDataURL(file);
        }}/>
                </form>
            </div>
        </div> 
    );
};