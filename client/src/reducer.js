// our simple reducer , initially our data will be null
// we will only get the data when we make an api call to the server
// and dispatch the action with data
// which can be accessed by action.payload
export const method = (state = { data: null }, action) => {
  let newState, id, indexValue;
  switch (action.type) {
    case "update":
      return { data: action.payload };

    case "updateMyList":
      console.log("from reducers : \n", { ...state });
      newState = { ...state };
      id = action.payload;
      indexValue = 0;
      newState.data.mylist.forEach((item, index) => {
        item.id === id && (indexValue = index);
      });
      newState.data.recommendations.push(newState.data.mylist[indexValue]);
      newState.data.mylist.splice(indexValue, 1);
      return newState;

    case "updateRecommendations":
      newState = { ...state };
      id = action.payload;
      indexValue = 0;
      newState.data.recommendations.forEach((item, index) => {
        item.id === id && (indexValue = index);
      });
      newState.data.mylist.push(newState.data.recommendations[indexValue]);
      newState.data.recommendations.splice(indexValue, 1);
      return newState;
    default:
      return state;
  }
};
