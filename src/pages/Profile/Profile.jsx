import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { getProfileUsers, getProfileUsersPost,} from "../../redux/actions/ProfileActions";
import GroupIcon from "@mui/icons-material/Group";
import { useParams } from "react-router-dom";
import Info from "../../components/Info/Info";
import About from "../../components/About/About";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ShowFriendsProfile from "../../components/ShowFriendsProfile/ShowFriendsProfile";
import ShowFollowingsProfile from "../../components/ShowFollowingsProfile/ShowFollowingProfile";
import SingleUserPosts from "../../components/SingleUserPosts/SingleUserPost";
import Friends from "../../components/Friends/Friends";
import Following from "../../components/Following/Following";
import ProfilePhotoShow from "../../components/ProfilePhotoShow/ProfilePhotoShow";
import SavedPost from "../../components/SavePost/SavePost";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [UserPosts, setUserPosts] = useState([]);
  const [post, setposts] = useState([]);

  const [showaccount, setshowaccount] = useState(true);
  const [showfriends, setshowfriends] = useState(false);
  const [showfollowing, setshowfollowing] = useState(false);
  const [showsaved, setshowsaved] = useState(false);
  const { id } = useParams();
  const { auth, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);
  
  const handletoggle = (ht) => {
    if (ht === "showaccount") {
      setshowsaved(false);
      setshowfriends(false);
      setshowfollowing(false);
      setshowaccount(true);
    } else if (ht === "showfriends") {
      setshowsaved(false);
      setshowfriends(true);
      setshowfollowing(false);
      setshowaccount(false);
    } else if (ht === "showfollowing") {
      setshowsaved(false);
      setshowfriends(false);
      setshowfollowing(true);
      setshowaccount(false);
    } else if (ht === "showsaved") {
      setshowsaved(true);
      setshowfriends(false);
      setshowfollowing(false);
      setshowaccount(false);
    }
  };



  useEffect(() => {
    if (profile.userposts.every((item) => item._id !== id)) {
      dispatch(getProfileUsersPost({ profil: profile.userposts, id, auth }));
    } else {
      profile.userposts.forEach((item) => {
        if (item._id === id) {
          setposts(item.posts);
        }
      });
    }
  }, [id, auth, profile.ids, profile.userposts, dispatch]);

  useEffect(() => {
    if (id === auth.user?._id) {
      setUserData([auth.user]); 
    } else {
      dispatch(getProfileUsers({ users: profile.users, id, auth }));
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData); 
    }
  }, [id, auth, dispatch, profile.users]);



  useEffect(() => {
    profile.userposts.forEach((item) => {
      if (item._id === id) {
        setposts(item.posts);
      }
    });
  }, [profile.userposts, id]);


  useEffect(() => {
    const newprofileimages = post.map((item) => item.image ? item.image : "");
    setPhotos(newprofileimages);
  }, [post]);

  return (
    <div className="profile">
      <Info userData={userData} post={post} dispatch={dispatch} profile={profile} auth={auth} id={id} />
      <div className="profileheader">
        <div className="profileheader-items">
          <IconButton className="profileheader-item" onClick={()=>handletoggle('showaccount')}>
            <AccountCircleIcon  />
          </IconButton>
          <hr />
          <IconButton onClick={() => handletoggle("showfriends")}>
            <GroupIcon />
          </IconButton>
          <hr />
          <IconButton onClick={() => handletoggle("showfollowing")}>
            <GroupAddIcon />
          </IconButton>
          <hr />
          <IconButton onClick={() => handletoggle("showsaved")}>
            <LibraryAddIcon />
          </IconButton>
        </div>
      </div>
      {showaccount && (
        <div className="profilebody">
          <div className="profilebody-left">
            <About userData={userData} dispatch={dispatch} profile={profile} auth={auth}  id={id} />
            {id === auth.user?._id && (
              <>
                <ShowFriendsProfile user={auth.user} />
                <ShowFollowingsProfile user={auth.user} />
              </>
            )}
          </div>

          <div className="profilebody-center">
            <SingleUserPosts userPosts={UserPosts} post={post} dispatch={dispatch} profile={profile} auth={auth} id={id} />
          </div>

          {/* <div className="profilebody-right">
            {photos.length > 0 && (
              <>
                <ProfilePhotoShow photos={photos} />
              </>
            )}
          </div> */}
        </div>
      )}
      {showfriends && (
        <Friends  userData={userData} dispatch={dispatch} profile={profile} auth={auth} id={id}/>
      )}
      {showfollowing && (
        <Following userData={userData} dispatch={dispatch} profile={profile} auth={auth} id={id} />
      )}
      {showsaved && <SavedPost auth={auth} />}
    </div>
  );
};

export default Profile;
