import React, {useState} from'react';


const Eventsearch = (props) =>{
    const [searchTerm, setSearchTerm] = useState("")
    const changeHandler = (event) =>{
        setSearchTerm(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.value(searchTerm)
    }
    return(
        <div className= "nav-bar">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <form> 
                        <input type ="search" id="form1" className="form-controle" onChange = {changeHandler} />
                        <label className ="form-label" htmlFor="form1"></label> 
                        <button type= "submit" onClick= {submitHandler}> Search</button> 
                    </form>
        
                    </div>
                </div>
            </nav>
        </div>

        
    )
}

export default Eventsearch;


