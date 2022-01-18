import React from "react"
import {useSelector} from "react-redux"
import "./Banner.css"

const Banner = () =>{
    const {auth} = useSelector(state => state)
    return (
        <div className="banner"> 
            <h3 className="banner-name" > Friend U</h3> 

        </div>
    )
}

export default Banner;