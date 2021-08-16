import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Root from "./components/Root";
import Navbar from "./components/Navbar";
import PasswordRecovery from "./components/PasswordRecovery";
import Home from "./components/Home";
import HomeNav from "./components/HomeNav";
import Tweets from "./components/Tweets";
import Trending from "./components/Trending";
import Timeline from "./components/Timeline";
import Search from "./components/Search";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Root />
        </Route>
        <Route path="/passwordRecovery" exact>
          <Navbar />
          <PasswordRecovery />
        </Route>
        <Route path="/login" exact>
          <Navbar />
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Navbar />
          <Signup />
        </Route>
        <Route path="/home" exact>
          <HomeNav />
          <Home />
        </Route>
        <Route path="/timeline" exact>
          <HomeNav />
          <Timeline />
        </Route>
        <Route path="/tweets" exact>
          <HomeNav />
          <Tweets />
        </Route>
        <Route path="/trending" exact>
          <HomeNav />
          <Trending />
        </Route>
        <Route path="/search" exact>
          <HomeNav />
          <Search />
        </Route>
        <Route path="/profile" exact>
          <HomeNav />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
