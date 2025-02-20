import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Checkbox = ({ onCheck, checked}) => {

    const [isChecked, setIsChecked] = useState(checked || false);
   
    const handleCheck = () => {
        setIsChecked(!isChecked);
        onCheck(!isChecked);
    }

    useEffect(() => {
        setIsChecked(checked || false);
    }, [checked]);

    return (  
        <div className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer" htmlFor="checkbox">
                <input 
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-semidark-grey transition-all checked:border-black checked:bg-black"
                    id="checkbox"  
                    onChange={handleCheck}
                    checked={isChecked}
                />
                <Icon 
                    icon="iconamoon:check-bold" 
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                />
            </label>
        </div> 
    );
}
 
export default Checkbox;