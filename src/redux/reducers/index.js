import {combineReducers} from 'redux';
import auth from './authReducer';
import alert from './authReducer';
import profile from "./ProfileReducer";


export default combineReducers({
auth,
alert,
profile
});