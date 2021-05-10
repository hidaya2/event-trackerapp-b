const eventsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_EventS":
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;
