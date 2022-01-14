
import "./Bio.css";


const Bio = ({userData, dispatch, auth, profile,  id}) => {
    
    return(
        <div className="profilebio">
            {userData.length > 0 && userData.map((user =>
                <div className="profilebio-container" key={user._id}>
                    <div className="profilebio-top">
                        <img src={user.image} alt=""/>
                    </div>
                <div className="profilbio-center">
                    <img className="profilebio-cneterimage" src={user.image} alt=""/>
                    <button className="profilebio-centerbutton">Add Friend</button>
                </div>
                <div className="profilebio-bottom">
                    <div className="profilebio-bottomleft">
                    <div className="profilebio-stat">
                        <h6 className="profilebio-allfriends">{user.friends.length}</h6>
                        <h6 className="profilebio-friends">FRIENDS</h6>
                    </div>
                    <div className="profilebio-stat">
                        <h6 className="profilebio-allfriends">{user.following.length}</h6>
                        <h6 className="profilebio-friends">FOllOWING</h6>
                    </div>
                    </div>
                    <div className="profilebio-bottomcenter">
                        <h3 className="profile-fullname">{user.fullname}</h3>
                        <h5 className="profile-username">{user.username}</h5>
                    </div>
                    <div className="profilebio-bottomright">
                    <div className="profilebio-stat">
                        <h6 className="profilebio-allfriends">{user.posts.length}</h6>
                        <h6 className="profilebio-friends">POST</h6>
                    </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
export default Bio;