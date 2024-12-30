import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart= ()=>{
    const cartItems =useSelector((store)=>store.cart.items)
    const dispach = useDispatch();
    const handleClearcart =()=>{
        dispach(clearCart())
    }
return (
    <div className=" text-center m-4 p-4">
        <h1 className="font-bold text-xl">Cart</h1> 
      <div className="w-1/2 m-auto" > 
      <button className="font-bold text-white bg-black m-1 p-2" onClick={handleClearcart}>Clear cart</button>
       <ItemList items={cartItems} label={"Remove"}/>
    </div></div>
)
};
export default Cart;