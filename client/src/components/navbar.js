import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";


export const Navbar = () => {
    const context = useContext(ShopContext);
    return (
        <div className="navbar">
        { !context.admin ? /*se hace esta pregunta para saber si el usuario registrado es un admin y saber las opciones que se ofrecen*/
            !context.logged ? /*es para saber si hay un usuario logeado y por lo tanto al darle click en el carrito, poder redireccionar al login o al carrito */
                <div className="links"> 
                    <Link to="/"> Shop </Link> {/*redirige a la ruta raiz cuando se le da clic al texto de shop*/} 
                    <Link to="/login"> {/*se redirige al login si se le da clic al carrito*/}
                        <ShoppingCart size={32}/>{/*se llama al elemento shopping cart*/}
                    </Link>
                </div>
                :
                <div className="links"> {/*en caso de que este logeado se redirige igualmente al shop pero ahora cuando se le da clic al carrito redirecciona hacia el carrito*/}
                    <Link to="/shop"> Shop </Link>
                    <Link to="/cart">
                        <ShoppingCart size={32}/>{/*se llama al elemento shopping cart*/}
                    </Link>
                </div>
            :
            <div className="links"> {/*si el usuario es admin envia hacia el editor del inventario y hacia el editor del perfil del administrador*/}
                    <Link to="/editInventory"> Products </Link>
                    <Link to="/editAdmin"> Admin Profile </Link>
                </div>
        }
        </div>
    )
};