import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/navbar"
import Home from "./Pages/home"
import Cart from "./Pages/cart"
import Category from "./Pages/category"
import ProductView from "./Pages/product-view"

import CartCrud from './cartFunction'

function App() {

    const { cart, addCart, updateCart, deleteCart, cartAlert, success, selectAllinCart, selectPerProduct, selectPerShop, calculateCart, converter } = CartCrud();

    return (
        <>
            <Navbar cartCount={cart.length}/>
            <main className="bg-off-white min-h-dvh font-inter text-black">            
                <Routes>
                <Route 
                    path="/" 
                    element={<Home />}
                    
                />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cart={cart} 
                            deleteCart={deleteCart} 
                            updateCart={updateCart} 
                            selectAllinCart={selectAllinCart} 
                            selectPerProduct={selectPerProduct}
                            selectPerShop={selectPerShop}
                            calculateCart={calculateCart}
                            converter={converter}
                        />
                    }
                />
                <Route 
                    path="/category" 
                    element={<Category/>}
                />
                <Route 
                    path="/:id" 
                    element={<ProductView addCart={addCart} cart={cart} cartAlert={cartAlert} success={success}/>}
                />
                </Routes>
            </main>
        </>
    );
}

export default App;
