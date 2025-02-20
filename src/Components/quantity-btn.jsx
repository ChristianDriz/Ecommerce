import { useState } from "react"

const QuantityBtn = ({ stocks, onQuantityChange, prodQty }) => {

    const [quantity, setQuantity] = useState(prodQty ? prodQty : 1);

    const increment = () => {
        
        if (stocks > quantity) {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1);
        } else {
            alert('not exceed the stocks');
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    }

    const changeQty = (e) => {
        const value = e.target.value; 

        if (/^[0-9]*$/.test(value)) {
            if (stocks > value) {
                setQuantity(value);
                onQuantityChange(value);
            } else if (value === '0') {
                setQuantity(1);
                onQuantityChange(1);
            } else {
                alert('not exceed the stocks');
            }
        }
    }

    return (  
        <div className="flex outline outline-1 outline-semidark-grey rounded-full h-9 max-md:h-7 ">
            <button className="px-3 max-md:px-2 text-large max-md:text-12 active:scale-90 hover:text-dark-grey" onClick={decrement}>-</button>
            <input 
                type="text" 
                className="w-10 text-small max-md:text-12 text-center outline outline-1 outline-semidark-grey max-md:w-7 bg-inherit "
                value={quantity}
                onChange={changeQty}
            />
            <button className="px-3 max-md:px-2 text-large max-md:text-12 active:scale-90 hover:text-dark-grey" onClick={increment}>+</button>
        </div>
    );
}
 
export default QuantityBtn;