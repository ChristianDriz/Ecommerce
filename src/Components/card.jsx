// import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

const Card = ({ prodID, prodname, thumbnail, price, sold, prodCat }) => {

    return (  
        <Link to={`/${prodID}`} className="rounded-2xl bg-white ">
            <div className="relative overflow-hidden rounded-t-2xl">
                <img src={thumbnail} alt="phone" className="h-full w-full object-cover hover:scale-110 duration-300"/>
            </div>
            <div className="flex flex-col gap-y-3 px-4 py-3 ">
                <div className="">
                    <p className="text-small leading-4 min-h-8 line-clamp-2">{prodname}</p>
                    {/* <div className="flex items-center gap-x-1">
                        <Icon icon="iconamoon:star-fill" className="text-star"/>
                        <span className="text-small">4.5 (20)</span>
                    </div> */}
                </div>
                <div className="flex items-center justify-between ">
                    <p className="text-regular font-medium">{price.toLocaleString()}</p>
                    <span className="text-12 text-dark-grey">{sold} sold</span>
                </div>
            </div>
        </Link> 
    );
}
 
export default Card;