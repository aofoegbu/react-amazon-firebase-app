import React, { createContext, useReducer, useEffect } from "react";
import { auth } from "./../App/Firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload.product],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};



// Prepares the data layer
export const StateContext = createContext({
  basket:[],
  user: null
});




// Wrap our appand provide the Data layer
export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      // console.log("The user is >>>>", userCredential);
      if (userCredential) {
        dispatch({
          type: "SET_USER",
          payload: {
            user: userCredential,
          },
        });
        // the user is logged in
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          payload: {
            user: null,
          },
        });
      }
    });
  }, []);
  
  const addItemTOBasket = (product)=>{
    
    dispatch({
      type:"ADD_TO_BASKET",
      payload:{
        product
      }
    })
    
    
  }

  return (
    <StateContext.Provider value={{state,addItemTOBasket}}>{children}</StateContext.Provider>
  );
};


