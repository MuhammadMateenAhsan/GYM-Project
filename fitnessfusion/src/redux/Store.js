import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer/Reducer";
import thunk from "redux-thunk";


export const store = createStore(reducer,compose(applyMiddleware(thunk)))