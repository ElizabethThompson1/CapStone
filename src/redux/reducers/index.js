import {combineReducers} from 'redux';
import auth from './authReducer';
import alert from './authReducer';


export default combineReducers({
auth,
alert

});