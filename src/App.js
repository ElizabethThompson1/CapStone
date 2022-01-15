import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Post from "./pages/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { refreshToken } from "./redux/actions/authAction";
import Header from "./components/Navbar/Navbar";
import Messages from "./pages/Messages/Messages";
import Notification from "./pages/Notifications/Notifications";
import Events from "./pages/Events/Events";
import Connect from "./pages/Connect/Connect";
import PrivateRouter from "./utils/PrivateRouter";
import Profile from "./pages/Profile/Profile";
import { getPost } from "./redux/actions/PostAction";
import Conversation from "./components/Conversation/Conversation";
import {getNotify} from "./redux/actions/notifyAction";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const login = localStorage.getItem("login");

  // useEffect(() => {
  //   dispatch(refreshToken());

  //   const socket = io();
  //   dispatch({ type: ALERT_TYPES.SOCKET, payload: socket });
  //   return () => socket.close();
  // }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPost(auth.token));
      dispatch(getNotify(auth));
    }
  }, [auth.token, auth, dispatch]);
  return (
    <div className="App">
      <Router>
        {auth.token && <Header />}
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            {auth.token ? <Home /> : <Login />}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRouter exact path="/messages">
            <Messages />
          </PrivateRouter>
          <PrivateRouter exact path="/connect">
            <Connect />
          </PrivateRouter>
          <PrivateRouter exact path="/events">
            <Events />
          </PrivateRouter>
          <PrivateRouter exact path="/notifications">
            <Notification />
          </PrivateRouter>
          <PrivateRouter exact path="/post/:id">
          {login ? <Conversation/> : <Redirect to="/"/>}
            <Post />
          </PrivateRouter>
          <Route exact path="/profile/:id">
            {login ? <Profile /> : <Redirect to="/" />}
            <Profile />
          </Route>
          <Route><NotFound/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
