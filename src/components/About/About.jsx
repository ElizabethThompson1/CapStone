import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileUsers } from "../../redux/actions/ProfileActions";

const About =() => {
     const [userData, setUserData] = useState([]);
    const {id} =  useParams();
    const { auth, profile } = useSelector(state => state);
    const dispatch = useDispatch();
    //At the start , redux store is undefined. it will take time 
    useEffect(()=>{
            if(auth && auth.user && id === auth.user._id) {
                setUserData([auth.user]) // it should be in array . as we declared it.
            }else{
                dispatch(getProfileUsers({users: profile.users, id , auth}))
                const newData = profile.users.filter(user=>user._id === id)
                setUserData(newData)   //this is already an array.
            }
    },[id, auth.user, auth])
    return(
        <div className="profileabout">
        {userData.length > 0  && userData.map(user=> (
            <div className="profileabout-container" key={user._id}>
                <div className="profileabout-contenttop">
                    <h4 className="profileabout-contenttop-head">About Me:</h4>
                    
                </div>
                <div  className="profileabout-contentcenter">
                        <p className="profileabout-contentcenter-story">{user.story}</p>
                </div>
        </div>
        
    )
    </div>
}
export default About;