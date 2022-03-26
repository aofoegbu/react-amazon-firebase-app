

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

