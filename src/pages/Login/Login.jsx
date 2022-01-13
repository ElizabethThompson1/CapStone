import React, {useState,useEffect} from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import {login} from "../../redux/actions/authAction";
import { useDispatch, useSelector} from 'react-redux';





const Login = () => {
    const initialState = {email: '', password: ''}
    const history = useHistory();
    const {auth} = useSelector(state => state);
    const [showpass , setShowpass] =useState(false)
    const [userData, setUserData] = useState(initialState);
    const dispatch = useDispatch();
    useEffect(() =>{
        if(auth.token){
            history.push("/")
        }
    })

    const {email, password} = userData;
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData , [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        dispatch(login(userData));
    }

    return (
        <div className='login'>
            <h3 className='login-header'>Friend U</h3>
            <h6 className='login-subheader'>Login</h6>
            <div className='login-data'>
                <form className='login-dataform' onSubmit={handleSubmit}>
                    <input className="login-input" onChange={handleChange} value={email} name='email' type="email" placeholder="Enter Email"></input>
                    <input className="login-input" onChange={handleChange} value={password} name='password' type={showpass ? "type": "password"} placeholder="Enter Password"></input>
                    <div className='showpass-button'>
                    <small className='showpass-login' onClick={()=>setShowpass(!showpass)}>show</small>
                    </div>
                    <button className='login-button' type="submit">Login</button>
                    <small className='create-account'>Do not have account<Link className="login-register" to="/register">Here</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login
