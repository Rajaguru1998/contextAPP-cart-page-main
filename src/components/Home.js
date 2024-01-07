import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../ContextAPI/CartContext";
function Home() {
  const { products, cart, setCart } = useContext(CartContext);
  return (
    <div className="productContainer" style={{ backgroundColor: "#F6F5F8" }}>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Home;
