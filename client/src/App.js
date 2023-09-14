import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.js";
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart' 
import { ShopContextProvider } from "./context/shop-context";
import { ShopAddtoCart } from "./pages/shopAddtoCart/shopAddtoCard";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import EditAdmin from "./pages/admin/editProfileAdmin/editProfileAdmin";
import { EditProduct } from "./pages/admin/editProduct/editProduct";
import StripeContainer from "./pages/Payment/stripeContainer";
function App() {
  return (
    <div className="App"> 
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/> 
          <Route path="/shop" element={<ShopAddtoCart />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/editAdmin" element={<EditAdmin />}/>
          <Route path="/editInventory" element={<EditProduct />}/>
          <Route path="/stripe" element={<StripeContainer />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
};

export default App;