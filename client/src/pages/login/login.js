import React from "react";
import './login.css'; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const URI = 'http://localhost:3001/users/'; 

const Login = () => {
    const context = useContext(ShopContext);
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate(`/register`);
    }

    const navigateLogin = () => {
        navigate(`/login`);
    }

    const navigateShopAddtoCart = () => {
        navigate(`/shop`);
    }

    const navigateEditInventory = () => {
        navigate(`/editInventory`);
    }

    const [entrada, SetEntrada] = useState('');  
    const [entradaP, SetEntradaP] = useState('');
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {
        const res = await axios.get(URI)
        console.log(res.data);
        setUsers(res.data)
    }



    const compare = () => {
            if (users.find(e => e.user_name === entrada && e.password === entradaP))
                return true;
            else
                return false;
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={compare}> 
                <input 
                    value={entrada} 
                    onChange={(e) => SetEntrada(e.target.value)}
                    type="text" name="user" id="user" placeholder="user" />
                <input 
                    value={entradaP} 
                    onChange={(e) => SetEntradaP((e.target.value))}  
                    type="password" name="pass" id="pass" placeholder="password" />
                <input type="submit" className="btn-login" value="Login" onClick={(e) => { 
                    e.preventDefault();
                    if(compare()) 
                    {
                        if (entrada === 'admin')  
                        {
                            navigateEditInventory();  
                            context.AdminChanger(true);
                        }
                        else 
                            navigateShopAddtoCart();
                        context.loggedChanger(true);
                    }
                    else
                         navigateLogin() }}/>
            </form>
            <div href="register" className="btn-register" onClick={navigateRegister}>register</div> 
        </div>
    )
}

export default Login;