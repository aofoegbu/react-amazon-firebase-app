import React, { createContext, useContext, useReducer, useEffect } from "react";
import { auth } from "./../App/Firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

// Prepares the data layer
export const StateContext = createContext();
// export default StateProvider;
export const state = () => useContext(StateContext);
// Wrap our appand provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
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

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
