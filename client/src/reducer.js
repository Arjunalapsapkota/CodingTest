// our simple reducer , initially our data will be null
// we will only get the data when we make an api call to the server
// and dispatch the action with data
// which can be accessed by action.payload
export const method = (state = { data: null }, action) => {
  switch (action.type) {
    case "update":
      return { data: action.payload };
    default:
      return state;
  }
};
