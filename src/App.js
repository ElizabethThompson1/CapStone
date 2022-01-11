import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
   <Router>
     <Switch>
     <Route exact path = "/register">
       <Register/>
     </Route>
     <Route exact path = "/login">
       <Login/>
     </Route>
     <Route><NotFound/></Route>
     </Switch>
   </Router>
  );
}

export default App;
