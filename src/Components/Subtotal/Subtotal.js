import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { state } from "./../../Context/StateProvider";
import { getBasketTotal } from "../../Context/reducer";

function Subtotal() {
  const { basket } = state();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              {/* {console.log(value)} */}
              <strong>{value}</strong>
              {/* <strong>{getBasketTotal(basket)}</strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
