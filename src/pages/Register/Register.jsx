import React,{useEffect, useState} from 'react'
import "./Register.css";
import { Link,useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authReducer from '../../redux/reducers/authReducer';
import { register } from '../../redux/actions/authAction';



const Register = () => {
    const initialState = {username:'',fullname:'',email:'',password:''};
    const[showpass,setShowpass] = useState(false);
    const [userData, setUserData] = useState(initialState);
    const {username,fullname,email,password} = userData;

    const {auth} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserData({...userData, [name]:value})
    }



    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(register(userData))
    }

    return (
        <div className='register'>
            <h3 className='register-header'>Friend U</h3>
            <h6 className='register-subheader'>Register</h6>
            <div className='register-data'>
                <form className='register-dataform' onSubmit={handleSubmit}>
                    <input className="register-input" style={{background: `${alert.fullname ? '#fa8e96' : ' '}`}}  type="text" name='fullname' value={fullname} onChange={handleChange} placeholder="Enter Name"></input>
                    <input className="register-input" style={{background: `${alert.fullname ? '#fa8e96' : ' '}`}} type="text" name='username' value={username.toLowerCase().replace(/ /g,'')} onChange={handleChange} placeholder="Enter Username"></input>
                    <input className="register-input" style={{background: `${alert.fullname ? '#fa8e96' : ' '}`}} type="email" name='email' value={email} onChange={handleChange} placeholder="Enter Email"></input>
                    <input className="register-input" style={{background: `${alert.fullname ? '#fa8e96' : ' '}`}} type={showpass ? "type" : "password"} name='password' value={password} onChange={handleChange} placeholder="Enter Password"></input>
                    <div className='showpass-button-registration'>
                    <small className='showpass-registration' onClick={()=>setShowpass(!showpass)}>show</small>
                    </div>
                    <button className='register-button' type="submit">Login</button>
                    <small className='goto-account'>Have an Account<Link className="register-login" to="/">Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Register
