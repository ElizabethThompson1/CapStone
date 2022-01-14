import React from "react";
import Bio from "../../components/Info/Bio";
import Posts from "../../components/Post/Post";

const Profile = () =>{
    return(
        <div>
            <div className="profile">
                <Bio/>
                <Posts/>
            </div>
        </div>
    )
}

export default Profile;