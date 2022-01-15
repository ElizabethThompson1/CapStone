import React from "react"
import {useSelector} from "react-redux"

const Banner = () =>{
    const {auth} = useSelector(state => state)
    return (
        <div style={{backgroundImage: `url(${auth.user.image})`, height:'250px', backgroundSize:'cover', backgroundRepeat:'no-repeat', width:'1000px', margin:'auto', borderRadius:'20px', position:'relative'}}>
            <div style={{ backgroundColor:"white", height:'250px', borderRadius:'20px'}}> 
            <h3 style={{textAlign:'center', transform:'translateY(100px)'}}> Friend U</h3> 
            </div>
        </div>
    )
}

export default Banner;