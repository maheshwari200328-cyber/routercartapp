import { useContext } from "react";
import { cartContext } from "../App";

function Product({item}){
    const {cart,setCart}=useContext(cartContext)
    const addCart=()=>{
        setCart([...cart,item])

    }
    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==item.id))

    };
    const isInCart=cart.some((c)=>c.id===item.id)
    return(
        <div>
              <div className="" >
            
                  
            <div className="ring-1 p-3 m-3 font-semibold "> 
            <img src={item.imgUrl} alt={item.title} className="w-full h-70 rounded-xl"/>
            <div className="text-center"> 
                 <h1 className="font-semibold "> {item.title}</h1>
            <p>${item.price}</p>
            <p className="font-semibold ">{item.description}</p>
            {
                isInCart?(
                    <button onClick= {removeCart}className="rounded-2xl ring-1 p-2 bg-red-200 !importatant cursor-pointer ">Remove from Cart</button>): (
                    <button onClick={addCart} className="rounded-2xl ring-1 p-2 bg-gray-200 cursor-pointer">AddToCart</button>

                    )          

                
            }
</div>
           
            </div>
          

            </div>
        </div>
      
          
        
       
    )
}
 export default Product;