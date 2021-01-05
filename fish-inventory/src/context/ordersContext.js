import createDataContext from "./createDataContext";
const orderObj = {};
const ordersReducer = (state, action) => {
  let order;
  switch (action.type) {
    case "ADD_ORDER":
      const key = action.payload;
      order = { ...state };
      order[key] = order[key] + 1 || 1;
      localStorage.setItem("order", JSON.stringify(order));
      return order;

    case "DELETE_ORDER_ITEM":
      const item_key = action.payload;
      order = { ...state };
      delete order[item_key];
      localStorage.setItem("order", JSON.stringify(order));

      return order;

    default:
      return state;
  }
};

const addToOrder = (dispatch) => (key) => {
  dispatch({ type: "ADD_ORDER", payload: key });
};
const deleteOrderItem = (dispatch) => (item_key) => {
  dispatch({ type: "DELETE_ORDER_ITEM", payload: item_key });
};

export const { Context, Provider } = createDataContext(
  ordersReducer,
  { addToOrder, deleteOrderItem },
  JSON.parse(localStorage.getItem("order")) || orderObj
);
