import React from "react";
import "./Cart.css";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[cartItems._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                <img alt="" src={item.image} />
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
