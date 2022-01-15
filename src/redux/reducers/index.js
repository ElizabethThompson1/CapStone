import {combineReducers} from 'redux';
import auth from "./authReducer";
import alert from "./alertReducer";
import profile from "./ProfileReducer";
import homePost from "./postReducer";
import status from "./StatusReducer";
import detailPost from "./detailPostReducer";
import socket from "./socketReducer";
import notify from "./notifyReducer";
import message from "./MessageReducer"

export default combineReducers({
auth,
alert,
profile,
homePost,
status,
detailPost,
socket,
notify,
message
});