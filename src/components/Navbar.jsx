import React from "react";
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
import { logout } from "../redux/actions/authAction";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state);
    const {pathname} =useLocation();

    const isActive = (pn) =>{
        if(pn === pathname) return "active"
    }

    return(
        <div className="navbar">
            <div className="navbar-right">
                <h3>Friend U</h3>
            </div>
            <div className="navbar-center">
                    <input type ="text" placeholder="Search Profiles"/>
                <SearchIcon/>
            </div>
            <div className="navbar-left">
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
                <div className="navbar-lefticon">
                    <AccountCircleIcon src={auth.user.image}/>
                    <h4>{auth.user.fullname}</h4>
                </div>
                <IconButton>
                    <LogoutIcon />
                </IconButton>
            </div>
        </div>
    )
}
export default Header;