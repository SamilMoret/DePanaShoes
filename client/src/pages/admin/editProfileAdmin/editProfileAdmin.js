import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const URIADMIN = 'http://localhost:3001/users/1/'; 

const EditAdmin = () => {
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const navigateShop = () => {
        navigate(`/editInventory`);
    }

    const update = async (e) => { 
        e.preventDefault();
        await axios.put(URIADMIN, { password: password, adress: adress, telephone: telephone, email: email });
        navigateShop();
    }


    return (
        <div className="register-form"> 
            <h2>Editar Perfil</h2>
            <form onSubmit={update} action="/auth" method="post">
                <input 
                value={password}
                onChange={ (e) => setPassword((e.target.value))}
                type="password" name="senha" id="senha" placeholder="senha"/>
                <input 
                value={adress}
                onChange={ (e) => setAdress(e.target.value)}
                type="text" name="endereço" id="endereço" placeholder="endereço"/>
                <input 
                value={telephone}
                onChange={ (e) => setTelephone(e.target.value)}
                type="text" name="telefone" id="telefone" placeholder="telefone"/>
                <input 
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                type="text" name="email" id="email" placeholder="email"/>
                <input type="submit" className="btn-login" value="Editar" />
            </form>
        </div>
    )
}

export default EditAdmin;