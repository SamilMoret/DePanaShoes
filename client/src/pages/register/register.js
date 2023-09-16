import React from "react";
import './register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'http://localhost:3001/users/'; 

const Register = () => {
    const [nome, setNome] = useState(''); 
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState([]);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate(`/login`);//envia al login
    }

    const navigateRegister = () => {
        navigate(`/register`);//envia al resgiter
    }

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {
        const res = await axios.get(URI)
        setUsuario(res.data)
    }

    const store = async (e) => { 
        e.preventDefault();
        await axios.post(URI, {nome_usuario: nome, senha: senha, endereco: endereco, telefone: telefone, email: email });
        navigateLogin();
    }

    return (
        <div className="register-form">
            <h2>register</h2>
            <form onSubmit={store} action="/auth" method="post"> 
                <input 
                value={nome}
                onChange={ (e) => users.find(event => event.username === e.target.value) ? navigateRegister() : setNome(e.target.value)}
                type="text" name="user" id="user" placeholder="usuario" required/>
                <input 
                value={senha}
                onChange={ (e) => setPassword((e.target.value))}
                type="senha" name="pass" id="pass" placeholder="senha" required/>
                <input 
                value={endereco}
                onChange={ (e) => setEndereco(e.target.value)}
                type="text" name="adress" id="adress" placeholder="endereco" required/>
                <input 
                value={telefone}
                onChange={ (e) => setTelefone(e.target.value)}
                type="number" min ='0' name="telefone" id="tel" placeholder="telefone" required/>
                <input 
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                type="email" name="email" id="email" placeholder="email" required/>
                <input type="submit" className="btn-login" value="register" />
            </form>
        </div>
    )
}

export default Register;