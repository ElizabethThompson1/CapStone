import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notfound'>
            <h3 className='notfound-text'>Page Not Found</h3>
            <p className='notfound-found'>Home Page
            <Link to="/" className='notfound-link'>Here</Link></p>
        </div>
    )
}

export default NotFound
