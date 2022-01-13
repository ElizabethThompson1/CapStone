import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Post from "./pages/Post/Post";
import {useSelector, useDispatch} from 'react-redux';
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import { refreshToken } from "./redux/actions/authAction";
import Header from "./components/Navbar/Navbar";
import Messages from "./pages/Messages/Messages";
import Notification from "./pages/Notifications/Notifications";
import Events from "./pages/Events/Events";
import Connect from "./pages/Connect/Connect";
import PrivateRouter from "./utils/PrivateRouter";
import Profile from "./pages/Profile/Profile"


function App() {
  const{auth} = useSelector(state => state);
  const dispatch = useDispatch();
  

  useEffect(() =>{
    dispatch(refreshToken)
  },[dispatch])

  return (
    <div className="App">
      <Router>
          {auth.token && <Header/> } 
        <Switch>
        <Route exact path = "/register">
          <Register/>
        </Route>
        <Route exact path = "/">
          {auth.token ?  <Home/> : <Login/>}
        </Route>
        <Route exact path = "/login">
          <Login/>
        </Route>
        < PrivateRouter exact path = "/messages">
          <Messages/>
        </ PrivateRouter>
        <PrivateRouter exact path = "/connect">
          <Connect/>
        </PrivateRouter>
        <PrivateRouter exact path = "/events">
          <Events/>
        </PrivateRouter>
        <PrivateRouter exact path = "/notifications">
          <Notification/>
        </PrivateRouter>
        <PrivateRouter exact path = "/post/:id">
          <Post/>
        </PrivateRouter>
        <PrivateRouter exact path = "/profile/:id">
          <Profile/>
        </PrivateRouter>
        <Route><NotFound/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
