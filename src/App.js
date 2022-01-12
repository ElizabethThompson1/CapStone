import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Post from "./pages/Post/Post";
import Alert from "./components/Alert";

function App() {
  return (
   <Router>
     <Alert/>
     <Switch>
     <Route exact path = "/register">
       <Register/>
     </Route>
     <Route exact path = "/login">
       <Login/>
     </Route>
     <Route exact path = "/">
       <Login/>
     </Route>
     <Route exact path = "/post/:id">
       <Post/>
     </Route>
     <Route><NotFound/></Route>
     </Switch>
   </Router>
  );
}

export default App;
