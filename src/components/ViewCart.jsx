import { useEffect, useState ,useContext
} from "react";
import{cartContext} from "../App"

function ViewCart() {
  const {cart}=useContext(cartContext)
  const [total, setTotal] = useState(0);
  const [discountTotal,setDiscountTotal]=useState(0)

  // useEffect(() => {
  //   setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  // }, [cart]);
  useEffect(()=>{
    const totalAmount=cart.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    setTotal(totalAmount);
    const discount=totalAmount * 0.1;
    setDiscountTotal(totalAmount-discount)
  },[cart])


  return (
    <>
      <h1 className="font-semibold text-2xl mt-5 mb-3 p-3">🛒 Cart Products</h1>

      <div className="p-3">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 ring-1 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">Price: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">Your cart is empty 🛍️</p>
        )}
      </div>
      {cart.length>0 &&(
        <div>
          <h2 className="font-semibold mt-5 p-3 text-2xl space-y-2">
        Total Amount: ${total.toFixed(2)}
      </h2>
      <h2 className="text-green-600 mt-2 p-3 text-xl font-semibold">
        After 10% Discount:${discountTotal.toFixed(2)} 
      </h2>

        </div>
      )}

      
    </>
  );
}

export default ViewCart;
