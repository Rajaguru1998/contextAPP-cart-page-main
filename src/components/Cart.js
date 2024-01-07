import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../ContextAPI/CartContext";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  // Create a state to track the count for each product in the cart
  const [productCounts, setProductCounts] = useState(
    cart.reduce((counts, product) => {
      counts[product.id] = 1; // Default count for each product is 1
      return counts;
    }, {})
  );

  // Function to update the count for a specific product
  const updateProductCount = (productId, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: newCount,
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = cart.reduce((sum, product) => {
      const productCount = productCounts[product.id];
      const productPrice = product.price;
      return sum + productCount * productPrice;
    }, 0);

    return totalPrice;
  };

  return (
    <div style = {{backgroundColor:"#F6F5F8"}}>
      <span style={{ fontSize: 30 }}>My Cart</span> <br />
      <span style={{ fontSize: 30 }}>Total : Rs{calculateTotalPrice()}</span>
      {cart.length === 0 && (
        <div className="NoItems">
          <img
            src="https://media.tenor.com/hqTrjCi4fhkAAAAC/riz-vadivel.gif"
            alt="no datas"
          />
          <h1>No Carts in this database</h1>
        </div>
      )}
      <div className="cart-product">
        {cart.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            cartPage={true}
            count={productCounts[product.id]} // Pass the count for the specific product
            setCount={(newCount) => updateProductCount(product.id, newCount)} // Pass the function to update the count
          />
        ))}        
      </div>
    </div>
  );
};

export default Cart;
