import { useEffect, useState } from "react";
import Product from "./Product";

function Home() {
  const [items, setItem] = useState([]); 

  const AllItems = async () => {
    try {
      const data = await fetch("https://68c7b1095d8d9f5147329e53.mockapi.io/cartitems/cartitems");
      const result = await data.json();
      setItem(result);
      console.log(result);
    } catch (error) {
      console.error("Items not Fetching:", error);
    }
  };

  useEffect(() => {
    AllItems();
  }, []);

  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {items.map((item)=>(
        <Product key={item.id} item={item}  />
      ))}
      
    </div>
    
  );
}

export default Home;
