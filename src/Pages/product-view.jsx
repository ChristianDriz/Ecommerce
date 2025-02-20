import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import QuantityBtn from "../Components/quantity-btn"
import Variations from "../Components/variations"
import Alert from "../Components/alert"

import productsData from '../datas/data.json'
import sellerData from '../datas/data.json'

const ProductView = ({ addCart, cart, cartAlert, success }) => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [prodQty, setProdQty] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [sellerInfo, setSellerInfo] = useState(null);

    const [hoverImage, setHoverImage] = useState(null);

    useEffect(() => {
        const products = productsData.products;
        const shop = sellerData.seller;

        const itemId = parseInt(id, 10);

        const selectedItem = products.find(item => item.prodID === itemId);
        const selectedSellerInfo = shop.find(seller => seller.sellerID === selectedItem.sellerID);

        setItem(selectedItem);
        setSellerInfo(selectedSellerInfo);

    }, [id]);

    const handleAddtoCart = () => {
        addCart(item.prodID, item.sellerID, prodQty);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000); 
    };

    const handleQuantityChange = (quantity) => {
        setProdQty(quantity);
    };

    return (  
        <div>
            {showAlert && <Alert cartAlert={cartAlert} success={success}/>}
            {item ? (
                <div className="grid grid-cols-2 container mx-auto text-black gap-x-9 max-md:grid-cols-1 px-2 py-6">
                    <div className="grid gap-y-2">
                        <div className="">
                            <img 
                                src={hoverImage || item.thumbnail} // Will change to hovered image
                                alt="prod-img" 
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div 
                            className="grid grid-cols-5 gap-x-2" 
                            onMouseLeave={() => setHoverImage(item.thumbnail)} // Reset to original image
                        > 
                            {(item.images).map((list) => 
                                <img 
                                    key={list} 
                                    src={list} 
                                    alt="images" 
                                    className="rounded-xl hover:border-2 hover:border-coral"
                                    onMouseMove={() => setHoverImage(list)} 
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-2 ">
                            <p className="text-large leading-6 line-clamp-2">{item.productName}</p>
                            <div className="flex items-center gap-x-1">
                                <Icon icon="iconamoon:star-fill" className="text-star"/>
                                <span className="text-small">4.5 (20)</span>
                            </div>
                            <p className="text-32 font-bold">{item.price}</p>
                        </div>
                        <hr className="border-dashed border-semidark-grey"/>
                        {/* variations */}
                        <Variations/>
                        {/* quantity */}                    
                        <div className="flex flex-col gap-y-2 ">
                            <p className="text-small">Quantity</p>
                            <div className="flex items-center gap-x-3">
                                <QuantityBtn stocks={item.stocks} onQuantityChange={handleQuantityChange}/>
                                <span className="text-small text-dark-grey">{item.stocks} pcs available</span>
                            </div>
                        </div>
                        {/* buttons */}      
                        <div className="flex items-center gap-3 ">
                            <button className='px-8 py-4 bg-black text-white rounded-lg w-72' onClick={handleAddtoCart}>
                                Add to cart
                            </button>    
                            <button className='p-4 text-black rounded-full outline outline-1 outline-semidark-grey '>
                                <Icon icon="iconamoon:heart" className="h-6 w-6"/>
                            </button>   
                        </div>
                        <hr className="border-dashed border-semidark-grey"/>
                        {/* Seller details */}
                        <div className="flex flex-col gap-4">
                            <p className="text-large font-medium">Sold By</p>
                            <div className="flex gap-4">
                                <div className="h-14 w-14 border border-grey rounded-full">
                                    <img src={sellerInfo.profile} alt="profile" className="min-h-14 min-w-14 rounded-full object-cover"/>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="">
                                        <p className="text-regular font-medium">{sellerInfo.name}</p>
                                        <div className="flex gap-6 text-small ">
                                            <span>Rating: 123</span>
                                            <span>Products: 123</span>
                                            <span>Followers: 123</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-center text-small"> 
                                        <Link className="outline outline-1 outline-semidark-grey py-2 rounded-lg w-44">Message</Link>
                                        <Link className="outline outline-1 outline-semidark-grey py-2 rounded-lg w-44">View Shop</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
 
export default ProductView;