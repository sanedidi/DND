
export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};
export const getPaymentImage = (paymentMethod) => {
  switch (paymentMethod) {
    case "payme":
      return Payme;
    case "uzumPay":
      return uzumPay;
    case "cash":
      return cash;
    case "card":
      return card;
    default:
      return null;
  }
};
export const getDeliveryImage = (delevMethod) => {
  switch (delevMethod) {
    case "dele":
      return delev;
    case "self-call":
      return self;
  }
};