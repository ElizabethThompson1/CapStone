import React, {useEffect,useState} from "react";
import { getProfileUsers } from "../../redux/actions/ProfileActions";
import { useParams } from "react-router-dom";
import Bio from "../../components/Info/Bio";
import Posts from "../../components/Post/Post";
import About from "../../components/About/About";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Profile = () =>{
    const[userData,setUserData] =useState([]);
    const {id} = useParams();
    const {auth, profile}= useSelector(state=> state);
    const dispatch = useDispatch();

    console.log(userData)
    useEffect(()=>{
        if( id === auth.user?._id  ) {
            setUserData([auth.user]) 
        }else{
        
            dispatch(getProfileUsers({users: profile.users, id , auth}))
            const newData = profile.users.filter(user=> user._id === id)
            setUserData(newData)   
            
        }
},[id,auth,dispatch,profile.users])
    return(
        <div>
            <div className="profile">
                <Bio userData={userData} profile={profile} auth={auth} id={id}/>
                <div className="profilebody">
                    <div className="profilebody-left">
                        <About userData={userData} profile={profile} auth={auth} id={id}/>
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