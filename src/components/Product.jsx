import { useContext } from "react";
import { cartContext } from "../App";

function Product({ item }) {
  const { cart, setCart } = useContext(cartContext);

  const addCart = () => {
    setCart([...cart, item]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  const isInCart = cart.some((c) => c.id === item.id);

  return (
    <div className="w-80  rounded-xl shadow-md overflow-hidden m-4 hover:shadow-lg transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-contain bg-white p-3"
      />

      <div className="p-4 text-center">
        <h1 className="font-semibold text-lg mb-2  line-clamp-1">{item.title}</h1>
        <p className="text-gray-700 font-medium mb-1">${item.price}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {item.description}
        </p>

        {isInCart ? (
          <button
            onClick={removeCart}
            className="rounded-xl px-4 py-2 bg-[#EF6C6D] hover:bg-[#B2A8A8] text-black font-semibold cursor-pointer"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addCart}
            className="rounded-xl px-4 py-2 bg-[#1ACC93] hover:bg-gray-500 text-white font-semibold cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
