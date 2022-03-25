import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import countReducer from "./CountReducer";

const reducers=combineReducers({
    amount:amountReducer,
    count:countReducer
})
export default reducers