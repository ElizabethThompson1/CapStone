import React, {useState, useEffect} from "react";
import "./Navbar.css"; 
import  IconButton  from "@material-ui/core/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import TravelExploreTwoToneIcon from '@mui/icons-material/TravelExploreTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { Link, useLocation } from "react-router-dom";
import { getDataApi } from "../../utils/fetchData";
import UserCard from "../UserCard/UserCard";


const Header = () => {
    const [load,setLoad] = useState(false)
    const [search,setSearch] = useState("");
    const [users,setUsers] = useState([]);
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state);
    const{pathname} = useLocation();
    

    const handleSearch = async (e) =>{
        e.preventDefault();
        if(!search) return;
  
        try {
           setLoad(true)
           const res = await getDataApi(`search?username=${search}`,auth.token);
           setUsers(res.data.users)
           setLoad(false)
        } catch (err) {
           dispatch({
              type:'ALERT',
              payload:{
                 error: err.response.data.msg
              }
           })
        }
        
    }

    const handleClose = () =>{
        setSearch("");
        setUsers([])
    }

    

    return(
        <div className="navbar">
             <div className="navbar-right">
                <h3>Friend U</h3>
            </div>
            <form className="navbar-center" onSubmit={handleSearch}>
                    <input type ="text" placeholder="Search Profiles" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <SearchIcon style={{opacity: users.length > 0 ? "0" : "1"}}/>
                <span className="navbar-close" onClick={handleClose} style={{opacity: users.length > 0 ? '1' : '0'}}>&times;</span>
                <button type="submit" style={{display:'none'}}>Search</button>
            <div className="navbar-searchusers">
            {load && <h3>Loading...</h3>}
            {
                search && users.length > 0 && users.map(user =>(
                    <UserCard user={user} key={user._id} handleClose={handleClose} style={{opacity: users.length > 0 ? '0' : '1'}}/>

                ))
            }
            </div>
            </form>
            <div className="navbar-left">
                <Link to={`profile/${auth.user._id}`}> <div className="navbar-lefticon">
                        <AccountCircleIcon src={auth.user.image}/>
                        <h4>{auth.user.fullname}</h4>
                    </div>
                </Link>
                <Link to="/">
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Link>
                <Link to="/messages">
                    <IconButton>
                        <ForumTwoToneIcon />
                    </IconButton>
                </Link>
                <Link to="/notifications">
                    <IconButton>
                        <NotificationsActiveRoundedIcon />
                    </IconButton>
                </Link>
                <Link to="/events">
                    <IconButton>
                        <TravelExploreTwoToneIcon />
                    </IconButton>
                </Link>
                <Link to="/connect">
                    <IconButton>
                        <ConnectWithoutContactIcon />
                    </IconButton>
                </Link>
                <IconButton>
                    <LogoutIcon onClick={()=>dispatch(logout())} />
                </IconButton>
            </div>
        </div>

    )
}
export default Header;