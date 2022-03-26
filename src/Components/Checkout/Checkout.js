import React, { useContext } from "react";
import "./Checkout.css";
import Subtotal from "./../Subtotal/Subtotal";
import CheckoutProduct from "./../CheckoutProduct/CheckoutProduct";
import { StateContext } from "./../../Context/StateProvider";

function Checkout() {
  const state = useContext(StateContext);
  const { basket, user } = state();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="assets/img/background_2.jpg"
          alt="checkout banner"
        />

        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              alt={item.alt}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
