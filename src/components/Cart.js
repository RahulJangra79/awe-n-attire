import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from local storage ONCE when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // ✅ Save to local storage ONLY when cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const validCoupons = {
    SAVE10: 10, // 10% discount
    WELCOME5: 5, // 5% discount
  };

  const handleApplyCoupon = () => {
    if (validCoupons[coupon]) {
      setDiscount(validCoupons[coupon]);
      setCouponMessage(`Coupon applied! ${validCoupons[coupon]}% off`);
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) * item.quantity || 0),
    0
  );
  
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="cart-container">
      {/* Cart Section */}
      <div className="cart-items">
        <h2>My Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${Number(item.price).toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p className="item-total">${(Number(item.price) * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        
        {/* Coupon Code Section */}
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter a promo code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
          />
          <button onClick={handleApplyCoupon}>Apply</button>
          {couponMessage && <p className="coupon-message">{couponMessage}</p>}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
        {discount > 0 && <p>Discount: <span>-${discountAmount.toFixed(2)}</span></p>}
        <p>Delivery: <span>FREE</span></p>
        <p className="total"><strong>Total: ${total.toFixed(2)}</strong></p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;