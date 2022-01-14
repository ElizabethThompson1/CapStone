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
    const [search,setSearch] = useState("");
    const [users,setUsers] = useState([]);
    const[load,setLoad] = useState(false)
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state);
    const{pathname} = useLocation();

    const isActive = (pn) =>{
         if(pn === pathname) return "active"
    }

  
    const handleClose = () =>{
        setSearch("");
        setUsers([])
    }

    const handleSearch =async (e) => {
        e.preventDefault();
        if(!search) return;
        try{
            setLoad(true)
            const res = await getDataApi(`search?username=${search}`,auth.token)
            setSearch(res.data.users)
            setLoad(false)
        }catch (err){
            dispatch({
                type:'ALERT',
                payload:{
                    error: err.response.data.msg
                }
                
            })
        }
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
                {load && <small>Loadind...</small>}

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
                        <HomeIcon className={`${isActive ("/")}`}/>
                    </IconButton>
                </Link>
                <Link to="/messages">
                    <IconButton>
                        <ForumTwoToneIcon className={`${isActive ("/messages")}`} />
                    </IconButton>
                </Link>
                <Link to="/notifications">
                    <IconButton>
                        <NotificationsActiveRoundedIcon className={`${isActive ("/notifications")}`} />
                    </IconButton>
                </Link>
                <Link to="/events">
                    <IconButton>
                        <TravelExploreTwoToneIcon className={`${isActive ("/events")}`}/>
                    </IconButton>
                </Link>
                <Link to="/connect">
                    <IconButton>
                        <ConnectWithoutContactIcon className={`${isActive ("/connect")}`}/>
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