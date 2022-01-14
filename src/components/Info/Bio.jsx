import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Bio = () => {

    const [userData, setUserData] = useState([]);
    const {id} = useParams();
    const {auth} = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() =>{
        if(auth && auth.user && id === auth.user._id){
            setUserData([auth.user])
        }
    },[id,auth.user,auth])

    return(
        <div className="profileinfo">
            {userData.length > 0 && userData.map((user =>(
                <div className="profilebio-container" key ={user._id}>
                    <div className="profilebio-top">
                        <img src={user.image} alt=""/>
                    </div>
                <div className="porfilebio-center">
                    <AccountCircleIcon src={user.image}/>
                    <button>AdD Friend</button>
                </div>
                <div className="profilebio-bottom">
                    <div className="profilebio-bottomleft">
                        <div className="profilebio-status">
                            <h6 className="friends-profile">{user.friends.length}</h6>
                            <h6 className="friends-profile-desc">Friends</h6>
                        </div>
                        <div className="profilebio-status">
                            <h6 className="following-profile">{user.following.length}</h6>
                            <h6 className="following-profile-desc">Following</h6>
                        </div>
                    </div>
                    <div className="profilebio-bottomcenter">
                        <h3 className="profile-fullname">{user.fullname}</h3>
                        <h3 className="profile-username">{user.username}</h3>
                    </div>
                </div>
                </div>
            )))}
        </div>
    )
}
export default Bio;