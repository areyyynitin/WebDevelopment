export const initialState = { count: 0 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "incrementByAmount":
      return { count: state.count + action.payload };

    case "decrementByAmount":
      return { count: state.count - action.payload };

    default:
      state;
  }
};
