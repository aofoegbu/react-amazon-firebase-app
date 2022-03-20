import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our appand provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull

// function StateProvider({ StateContext }) {
//   export const useStateValue = useContext(StateContext);

//   return <div>StateProvider</div>;
// }

// export default StateProvider;
export const useStateValue = () => useContext(StateContext);
