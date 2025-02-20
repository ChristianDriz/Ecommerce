// import Navbar from '../Components/navbar'
// import MobileNav from "../Components/navbar-mobile"

import Card from '../Components/card'
import { Link } from "react-router-dom"
import Carousel from '../Components/logo carousel'
// import { useState, useEffect } from 'react'

import data from '../datas/data.json'


const Home = () => {

    const categories = data.categories;
    const products = data.products;

    return (  
        <>
            {/* <Navbar/>
            <MobileNav/> */}
            <div className="container mx-auto flex flex-col gap-y-4 px-2">
                {categories.map(cat => {
                // Filter products based on category
                const filteredProducts = products.filter(product => product.categoryID === cat.id).slice(0, 6);
                    
                return (
                <div className='py-6 ' key={cat.id}>
                    <div className='flex justify-between items-center'>
                        <p className="capitalize font-bold text-large">{cat.name}</p>
                        <Link to='/category' className='text-link-blue text-small hover:underline'>See more</Link>
                    </div>

                    <div className="grid grid-cols-6 gap-3 max-xl:grid-cols-4 max-md:grid-cols-2 ">  

                    {filteredProducts.map(list => (   

                        <Card 
                            key={list.id} 
                            prodID={list.prodID}
                            prodname={list.productName}
                            thumbnail={list.thumbnail}
                            price={list.price}
                            sold={list.soldCount}
                            prodCat={cat.id}
                        />
                    ))}
                    </div>
                </div>
                )})}
                
            </div>
            <Carousel/>
        </>
        
    );
}
  
export default Home;