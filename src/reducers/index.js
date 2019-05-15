import {combineReducers} from 'redux';
import chatReducer from "./chat";
import errorReducer from "./error";

export default combineReducers({
    chat: chatReducer,
    errors: errorReducer,

});