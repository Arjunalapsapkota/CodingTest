// if we already have data in local storage we take that data
// and create a new store

// Redux itself doesn't do much
// we still need to store the data to local storage for making it persistant
import { loadState, saveState } from "./localStorage";
import { createStore } from "redux";

const reducer = require("./reducer.js").method;
const persistedState = loadState();
console.log("persisted state : ", persistedState);
const store = createStore(reducer, persistedState);
// lets listen to our store
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
