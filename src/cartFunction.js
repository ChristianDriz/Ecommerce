import { useState } from "react";
// import Checkboxes from "./checkbox";

const CartCrud = () => {
    const [cart, setCart] = useState([]);
    const [cartID, setCartID] = useState(1);
    const [success, setSuccess] = useState(false);
    const [cartAlert, setCartAlert] = useState('');

    // const { selectOne } = Checkboxes();

    const addCart = (prodID, sellerID, qty) => {
        // check if the product is already in cart
        const isProductInCart = cart.some((data) => data.prodID === prodID);

        if (!isProductInCart) {
            const newCartData = {
                cartID: cartID,
                prodID: prodID, 
                sellerID: sellerID,
                qty: qty,
                checked: false
            }
            setCart([...cart, newCartData]);
            setCartID(cartID + 1);
            setCartAlert('Item has been successfully added in your cart');
            setSuccess(true);
        } else {
            setCartAlert('Item is already in your cart');
            setSuccess(false);
        }
    }

    const updateCart = (cartID, newQty) => {
        const updatedCart = (cart.map((datas) => {
            return datas.cartID === cartID ? { ...datas, qty: newQty } : datas;
        }));
        setCart(updatedCart);
    }

    const deleteCart = (itemToDelete) => {
        const newCartList = cart.filter((item) => item.cartID !== itemToDelete)
        setCart(newCartList);
    }

    const selectAllinCart = (checked) => {
        const updatedCart = (cart.map((datas) => {
            return {...datas, checked: checked}
        }));
        setCart(updatedCart);
    }

    const selectPerShop = (checked, sellerID) => {
        const updatedCart = (cart.map((datas) => {
            return datas.sellerID === sellerID ? {...datas, checked: checked} : datas;
        }));
        setCart(updatedCart);
    }

    const selectPerProduct = (checked, prodID) => {
        const updatedCart = (cart.map((datas) => {
            return datas.prodID === prodID ? {...datas, checked: checked} : datas;
        }));
        setCart(updatedCart);
    }

    const calculateCart = (groupedCart) => {

        let subtotal = 0;
        
        for (const sellerID in groupedCart) {
            const sellerData = groupedCart[sellerID];
        
            // Iterate through products
            for (const product of sellerData.productInfo) {
                if (product.checked) {
                    // Parse the price and add it to the subtotal
                    subtotal += parseInt(product.price.replace(/[^\d]/g, ''), 10) * product.qty;
                }
            }
        }
        return subtotal;
    }

    //currency converter
    const converter = (number) => {
        const formattedNum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP'}).format(number);
        return formattedNum;
    }

    // sort the cart to descending order
    const sortedCart = [...cart].sort((a, b) => b.cartID - a.cartID) ;

    return { cart:sortedCart, addCart, updateCart, deleteCart, cartAlert, success, selectAllinCart, selectPerProduct, selectPerShop, calculateCart, converter };
}

export default CartCrud;