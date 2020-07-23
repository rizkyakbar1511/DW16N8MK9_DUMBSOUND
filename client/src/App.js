import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upgrade from "./pages/Upgrade";
import NavigationBar from "./components/NavigationBar";
import Transaksi from "./pages/Transaksi";
import AddMusic from "./pages/addMusic";
import AddArtist from "./pages/addArtist";
import "./components/assets/FontAwesomeIcon";
import "./App.css";

import { connect } from "react-redux";
import { login } from "./redux/actions/auth";

class App extends Component {
  render() {
    const { isAuthenticated, data: dataUser } = this.props.auth;

    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated === true && dataUser.role === 1 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );

    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );

    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRouteUser path="/profile" component={Profile} />
            <PrivateRouteAdmin path="/add-music" component={AddMusic} />
            <PrivateRouteAdmin path="/add-artist" component={AddArtist} />
            <PrivateRouteUser path="/upgrade" component={Upgrade} />
            <PrivateRouteAdmin path="/transaction" component={Transaksi} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(App);
