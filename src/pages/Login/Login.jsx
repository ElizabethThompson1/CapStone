import React, {useState} from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");  
    const[showpass,setShowpass] =useState(false);

    return (
        <div className='login'>
            <h3 className='login-header'>Friend U</h3>
            <h6 className='login-subheader'>Login</h6>
            <div className='login-data'>
                <form className='login-dataform'>
                    <input className="login-input" value={email} onChange={(e) => setEmail(e.target.email)} type="email" placeholder="Enter Email"></input>
                    <input className="login-input" value={password} onChange={(e)=> setPassword(e.target.password)} type={showpass ? "type": "password"} placeholder="Enter Password"></input>
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
