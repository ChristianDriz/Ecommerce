// import { useState } from "react";

const Variations = () => {
    return (  
        <div className="flex flex-col gap-y-2 text-small">
            <p className="">Color</p>
            <div className="flex gap-x-3">
                <label htmlFor="variation1" className="rounded-full outline outline-1 outline-semidark-grey px-6 h-9 flex items-center">Gold</label>
                <input id="variation1" type="radio" name="rad" className="hidden"/>

                <label htmlFor="variation2" className="rounded-full outline outline-1 outline-semidark-grey px-6 h-9 flex items-center">Silver</label>
                <input id="variation2" type="radio" name="rad" className="hidden"/>

                <label htmlFor="variation2" className="rounded-full outline outline-1 outline-semidark-grey px-6 h-9 flex items-center">Titanium</label>
                <input id="variation2" type="radio" name="rad" className="hidden"/>
            </div>
            
        </div>
    );
}
 
export default Variations;