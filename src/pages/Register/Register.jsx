import React,{useState} from 'react'
import "./Register.css"

const Register = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");  
    const[username,setUserName] = useState("");  
    const[fullname,setFullName] = useState("");  

    return (
        <div className='register'>
            <h3 className='register-header'>Friend U</h3>
            <h6 className='register-subheader'>Register</h6>
            <div className='register-data'>
                <form className='register-dataform'>
                    <input className="register-input" value={fullname} onChange={(e)=> setFullName(e.target.fullname)} placeholder="Enter Name"></input>
                    <input className="register-input" value={username} onChange={(e)=> setUserName(e.target.username)} placeholder="Enter Username"></input>
                    <input className="register-input" value={email} onChange={(e) => setEmail(e.target.email)} placeholder="Enter Email"></input>
                    <input className="register-input" value={password} onChange={(e)=> setPassword(e.target.password)} placeholder="Enter Password"></input>
                    <button className='register-button' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Register
