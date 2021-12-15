import { combineReducers } from "redux"
import userReducer from "./userReducer"
import workReducer from "./workReducer"

export default combineReducers({
    userReducer,
    workReducer,
})