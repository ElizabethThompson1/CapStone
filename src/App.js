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
import Header from "./components/Navbar";
import Messages from "./pages/Messages/Messages";
import Notification from "./pages/Notifications/Notifications";
import Events from "./pages/Events/Events";
import Connect from "./pages/Connect/Connect";


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
        <Route exact path = "/message">
          <Messages/>
        </Route>
        <Route exact path = "/connect">
          <Connect/>
        </Route>
        <Route exact path = "/events">
          <Events/>
        </Route>
        <Route exact path = "/notification">
          <Notification/>
        </Route>
        <Route exact path = "/post/:id">
          <Post/>
        </Route>
        <Route><NotFound/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
