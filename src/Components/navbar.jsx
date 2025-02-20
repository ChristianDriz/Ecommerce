import { Link } from "react-router-dom";
import Logo from '../img/future finds logo.svg'
import { Icon } from '@iconify/react'

const Navbar = ({ cartCount }) => {
    return (  
        <nav className="bg-white sticky top-0 text-black px-4 z-10 ">
            <div className="container mx-auto flex items-center justify-between py-6 max-md:gap-x-4 max-md:py-4 ">
                <Link to="/" className="flex items-center max-md:hidden">
                    <img src={Logo} alt="logo" className="h-8"/>
                    <p className="text-24 font-bold ">Future Finds</p>
                </Link>
                <div className="relative w-96 max-md:w-full">
                    <input type="text" className="bg-white outline outline-1 outline-semidark-grey rounded-2xl px-4 py-2 max-md:py-1 w-full text-paragraph" placeholder="Search"/>
                    <Icon icon="iconamoon:search" className="absolute top-3 right-3 text-24 text-dark-grey max-md:top-2"/>
                </div>
                <div className="flex text-24 gap-x-6 ">
                    <Link className="max-md:hidden">
                        <Icon icon="iconamoon:notification" />
                    </Link>
                    <Link to="/cart" className="relative ">
                        <Icon icon="iconamoon:shopping-card" />
                        <span className={`absolute left-4 top-[-8px] outline outline-white bg-black rounded-full px-1.5 text-12 leading-4 text-white ${cartCount === 0 ? 'hidden' : ''}`}>{cartCount}</span>
                    </Link>
                    <Link className="max-md:hidden">
                        <Icon icon="iconamoon:profile" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;