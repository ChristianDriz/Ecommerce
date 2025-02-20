import { Icon } from '@iconify/react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import Back from '../Components/backbutton'
import EmptyCart from '../img/emptycart.svg'
import Card from '../Components/card'
import QuantityBtn from '../Components/quantity-btn'
import Checkbox from '../Components/checkbox'

import data from '../datas/data.json'

const Cart = ({ cart, updateCart, deleteCart, selectAllinCart, selectPerProduct, selectPerShop, calculateCart, converter }) => {

    const [selectAll, setSelectAll] = useState(false);
    const [sellerCheckbox, setSellerCheckbox] = useState({});
    const [groupedCart, setGroupedCart] = useState({});
    const [countCart, setCountCart] = useState(0);

    const products = data.products;
    const sellers = data.seller;

    const subtotal = converter(calculateCart(groupedCart));

    useEffect(() => {        
        //grouping the seller and product details
        const cartInfo = cart.reduce((data, cartItem) => {
            const prodInfo = products.find(prod => prod.prodID === cartItem.prodID);
            const shopInfo = sellers.find(shop => shop.sellerID === cartItem.sellerID);
           
            if(!data[cartItem.sellerID]) {
                data[cartItem.sellerID] = {
                    sellerInfo: shopInfo, 
                    productInfo: [],
                };
            }

            data[cartItem.sellerID].productInfo.push({...cartItem, ...prodInfo })
            return data;
        }, {});

        setGroupedCart(cartInfo);

        // Check if all items is checked and set to true
        const allSelected = cart.every(item => item.checked === true);
        if (allSelected) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }

        // Check if all items with the same seller is checked and set to true
        const sellerCheckboxesUpdated = {};
        sellers.forEach((seller) => {
            const allSelectedSeller = cart.filter((item) => item.sellerID === seller.sellerID).every((item) => item.checked === true);
            sellerCheckboxesUpdated[seller.sellerID] = allSelectedSeller;
        });
        setSellerCheckbox(sellerCheckboxesUpdated);

        // To check how many checkbox is checked
        const checkCount = cart.filter(item => item.checked === true).length;
        setCountCart(checkCount);

    }, [cart, products, sellers ]);
    
    const deleteItem = (id) => {
        deleteCart(id);
    }

    const handleQuantityChange = (prodID, newQuantity) => {
        updateCart(prodID, newQuantity);
    }

    const handleCheckbox = (checked, type, sellerID, prodID) => {
        switch (type) {
            case 'all' :
                selectAllinCart(checked);
                setSelectAll(checked);
                break;

            case 'seller' : 
                selectPerShop(checked, sellerID);
                break;

            case 'product' :               
                selectPerProduct(checked, prodID);
                break; 

            default :
                break;
        } 
    }

    return (  
        <>
            <div className='bg-white md:hidden sticky top-0 text-black shadow'>
                <div className='container mx-auto p-3 flex items-center gap-x-2'>
                    <Back/>
                    <p className="capitalize font-bold text-large">my shopping cart</p>
                </div>
            </div>   
            <div className="container mx-auto flex flex-col gap-y-4 text-black px-2">
                {cart.length === 0 ? (
                <div className='container mx-auto text-center flex flex-col gap-4 items-center py-28 '>
                    <img src={EmptyCart} alt='empty-cart' className='w-60'/>
                    <p className='text-24 font-bold'>Your cart is empty</p>
                    <Link to="/category" className='border border-semidark-grey rounded-lg text-small text-dark-grey capitalize px-8 py-3 w-auto '>continue shopping</Link>
                </div>
                ) : (
                <div className="md:py-6"> 
                    <p className="capitalize font-bold text-large max-md:hidden">my shopping cart</p>
                    <div className="grid grid-cols-3 gap-x-4 py-4 max-md:py-2">    
                        <div className="col-span-2 flex flex-col gap-y-2 max-md:col-span-3"> 
                            <div className="flex p-6 bg-white rounded-2xl gap-x-4 text-regular font-medium max-md:hidden">
                                <Checkbox 
                                    onCheck={(checkStatus, type = 'all') => handleCheckbox(checkStatus, type)} 
                                    checked={selectAll}
                                />
                                <p>All</p>
                            </div> 

                            {Object.values(groupedCart).sort((a, b) => b.productInfo[0].cartID - a.productInfo[0].cartID).map((sellerGroup) => (

                            <div key={sellerGroup.sellerInfo.sellerID} className="px-6 py-4 bg-white rounded-2xl gap-x-2 text-regular font-medium max-md:px-4 max-md:py-2">
                                {/* Seller name */}
                                <div className="flex py-2 gap-x-4 max-md:gap-x-2">
                                    <Checkbox 
                                        onCheck={(checkStatus, type = 'seller') => handleCheckbox(checkStatus, type, sellerGroup.sellerInfo.sellerID, ' ')}
                                        checked={selectAll || sellerCheckbox[sellerGroup.sellerInfo.sellerID]}
                                    />
                                    <Link className='hover:text-dark-grey text-regular '>{sellerGroup.sellerInfo.name}</Link>
                                </div>
                                {/* product details */}
                                {sellerGroup.productInfo.map((cartDetails) => (
                                <div key={cartDetails.cartID} className="flex flex-row gap-x-4 py-3 items-start max-md:gap-x-2">
                                    <div className='flex gap-x-4 max-md:gap-x-2'>
                                        <Checkbox 
                                            onCheck={(checkStatus, type = 'product') => handleCheckbox(checkStatus, type, sellerGroup.sellerInfo.sellerID, cartDetails.prodID)} 
                                            checked={selectAll || cartDetails.checked}
                                        />
                                        <Link to={`/${cartDetails.prodID}`} className="min-w-32 min-h-32 max-md:min-w-20 max-md:min-h-20 ">
                                            <img src={cartDetails.thumbnail} alt="product-img" className="w-32 h-32 max-md:w-20 max-md:h-20"/>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col w-full gap-y-8 max-md:gap-y-2">
                                        <div >
                                            <Link Link to={`/${cartDetails.prodID}`} className="text-regular font-medium">{cartDetails.productName}</Link>
                                            {/* <select name="cars" id="cars" className="rounded-2xl bg-off-white py-1 px-4 text-12 my-1">
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select> */}
                                        </div>
                                       
                                        <div className="flex justify-between ">
                                            <p className="text-large font-bold text-coral">{cartDetails.price}</p>
                                            <div className='flex gap-x-8'>
                                                <QuantityBtn 
                                                    stocks={cartDetails.stocks} 
                                                    prodQty={cartDetails.qty} 
                                                    onQuantityChange={(newQuantity) => handleQuantityChange(cartDetails.cartID, newQuantity)}
                                                />
                                                <div className='flex items-center gap-x-3 text-24 max-lg:hidden'>
                                                    <Icon icon="iconamoon:heart" className='hover:cursor-pointer hover:text-dark-grey'/>
                                                    <Icon icon="iconamoon:trash" className='hover:cursor-pointer hover:text-dark-grey' onClick={() => deleteItem(cartDetails.cartID)} />
                                                </div>
                                                
                                                {/* <p>item total: { parseInt((cartDetails.price).replace(/[^\d]/g, ''), 10) * cartDetails.qty}</p> */}
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                ))}      
                            </div>
                            ))}
                        </div>
                    
                        <div className='max-md:hidden'>
                            <div className='bg-white rounded-2xl p-6 flex flex-col gap-6'>
                                <p className='text-large font-bold'>Order Summary</p>
                                <input type="text" placeholder='Enter voucher or code' className='text-small w-full rounded-lg outline-none bg-off-white px-4 py-3'></input>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-1 text-regular text-dark-grey'>
                                        <p>Subtotal ({countCart} item)</p>
                                        {/* <p>Shipping Fee</p> */}
                                    </div>
                                    <div className='flex flex-col gap-1 text-regular text-dark-grey text-right'>
                                        <p>{subtotal}</p>
                                        {/* <p>₱</p> */}
                                    </div>
                                </div>
                                <button className='py-4 bg-black text-white rounded-lg'>
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                <div className=' py-6 '>
                    <p className="capitalize font-bold text-large">you may also like</p>
                    <div className="grid grid-cols-6 gap-3 max-xl:grid-cols-4 max-md:grid-cols-2 ">
                    {products.map((list) => (
                        <Card
                            key={list.prodID}
                            prodID={list.prodID}
                            prodname={list.productName}
                            thumbnail={list.thumbnail}
                            price={list.price}
                            sold={list.soldCount}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Cart;