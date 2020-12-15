import './App.css';
import {axiosWithAuth} from './utils/axiosWithAuth';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'

function App() {

  const logout = () => {
    axiosWithAuth()
      .post("/logout", {
        userToken:localStorage.getItem('token')
      })
      .then((res)=>{
        localStorage.removeItem("token");
        window.location.href="/login";
      })
      .catch((err)=> console.log(err));
  }

  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route exact path="/protected" component={GasPrices} /> 
          */}
          <PrivateRoute exact path="/protected"  component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
