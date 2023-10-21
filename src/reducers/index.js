import { combineReducers } from "redux";
import data from './reducers';
import reminders from "./reducers";

const stor= combineReducers({
    data:reminders,
    
})

export default stor;