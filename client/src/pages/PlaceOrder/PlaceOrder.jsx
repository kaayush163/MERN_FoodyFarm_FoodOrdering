import React, { useContext } from "react";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" className="text" />
          <input type="text" placeholder="Last Name" className="text" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" className="text" />
          <input type="text" placeholder="State" className="text" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" className="text" />
          <input type="text" placeholder="Country" className="text" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                {currency}
                {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                {currency}
                {getTotalCartAmount() === 0 ? 0 : deliveryCharge}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {currency}
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliveryCharge}
              </b>
            </div>
          </div>
        </div>
        <div className="payment">
          <h2>Payment Method</h2>
          <div onClick={() => setPayment("cod")} className="payment-option">
            <img
              src={payment === "cod" ? assets.checked : assets.un_checked}
              alt=""
            />
            <p>COD ( Cash on delivery )</p>
          </div>
          <div onClick={() => setPayment("stripe")} className="payment-option">
            <img
              src={payment === "stripe" ? assets.checked : assets.un_checked}
              alt=""
            />
            <p>Stripe ( Credit / Debit )</p>
          </div>
        </div>
        <button className="place-order-submit" type="submit">
          {payment === "cod" ? "Place Order" : "Proceed To Payment"}
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
