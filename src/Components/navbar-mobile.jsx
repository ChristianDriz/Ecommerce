import { Link } from "react-router-dom";
import { Icon } from '@iconify/react'

const MobileNav = () => {
    return (  
        <nav className="bg-white text-black fixed bottom-0 w-full md:hidden">   
            <div className="container mx-auto flex items-center justify-between py-4 px-6 text-24">
                <Link to="/" className="">
                    {/* Home */}
                    <Icon icon="iconamoon:home" />
                </Link>
                <Link to="/favorites" className="">
                    {/* Favorites */}
                    <Icon icon="iconamoon:heart" />
                </Link>
                <Link to="/messages" className="">
                    {/* Messages */}
                    <Icon icon="iconamoon:email" />
                </Link>
                <Link to="/notifications" className="">
                    {/* Notification */}
                    <Icon icon="iconamoon:notification" />
                </Link>
                <Link to="/user" children>
                    {/* User profile */}
                    <Icon icon="iconamoon:profile" />
                </Link>
            </div>
        </nav>
    );
}
 
export default MobileNav;