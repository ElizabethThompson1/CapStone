import React from "react";
import Bio from "../../components/Info/Bio";
import Posts from "../../components/Post/Post";
import About from "../../components/About/About";

const Profile = () =>{
    return(
        <div>
            <div className="profile">
                <Bio/>
                <div className="profilebody">
                    <div className="profilebody-left">
                        <About/>
                    </div>
                    <div className="profilebody-center">
                        <Posts/>
                    </div>
                    <div className="profilebody-right">
                        <Posts/>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default Profile;