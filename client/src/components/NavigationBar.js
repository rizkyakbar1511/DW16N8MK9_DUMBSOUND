import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaMale,
  FaPhone,
  FaLocationArrow,
  FaMoneyBill,
  FaMusic,
} from "react-icons/fa";
import {
  MdAccountCircle,
  MdExitToApp,
  MdCreditCard,
  MdAssignment,
  MdPerson,
} from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/NavigationBar.css";
import logo from "./assets/img/logo-shape.png";
import dumbsound from "./assets/img/dumbsound.png";
import profileImg from "././assets/img/profile.jpg";

//Redux import
import { connect } from "react-redux";
import { register, login, logout, clearError } from "../redux/actions/auth";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      scrollPos: 0,
      showNav: true,
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmitRegister = async (event) => {
    event.preventDefault();
    await this.props.register(this.state.data);
    this.setState({ data: {} });
    toast.success("Register Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  handleSubmitLogin = async (event) => {
    event.preventDefault();
    await this.props.login(this.state.data);
    this.setState({ data: {} });
    toast.success("Login Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  handleLogout() {
    this.props.logout();
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      showNav: document.body.getBoundingClientRect().top > scrollPos,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const {
      isAuthenticated,
      data: dataUser,
      loading,
      error,
      errorLogger,
    } = this.props.auth;
    const { data } = this.state;

    let navUsers;
    if (isAuthenticated) {
      if (dataUser.role === 1) {
        navUsers = (
          <div className="dropdown show">
            <ToastContainer />
            <button
              className="btn"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={profileImg}
                className="rounded-circle"
                width="40px"
                alt="profile-img"
              />
              <p>Welcome, Admin!</p>
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/add-music">
                <FaMusic /> Add Music
              </Link>
              <Link className="dropdown-item" to="/add-artist">
                <MdPerson /> Add Artist
              </Link>
              <Link className="dropdown-item" to="/transaction">
                <FaMoneyBill /> Transaction
              </Link>
              <button
                onClick={() => {
                  this.handleLogout();
                }}
                className="dropdown-item"
              >
                <MdExitToApp /> Logout
              </button>
            </div>
          </div>
        );
      } else {
        navUsers = (
          <>
            <div className="dropdown show">
              <ToastContainer />
              <button
                className="btn"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={profileImg}
                  className="rounded-circle"
                  width="40px"
                  alt="profile-img"
                />
                <p>Welcome! {dataUser.fullName}</p>
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/profile">
                  <MdAccountCircle /> Profile
                </Link>
                <Link className="dropdown-item" to="/upgrade">
                  <MdCreditCard /> Upgrade
                </Link>
                <button
                  onClick={() => {
                    this.handleLogout();
                  }}
                  className="dropdown-item"
                >
                  <MdExitToApp /> Logout
                </button>
              </div>
            </div>
          </>
        );
      }
    } else {
      navUsers = (
        <>
          <div className="nav-btn">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#modal-login"
            >
              Login
            </button>
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#modal-register"
            >
              <MdAssignment /> Register
            </button>
          </div>
          <div className="modal fade" id="modal-login" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <FaUser /> Member Area
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.props.clearError()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {errorLogger && (
                    <div className="alert alert-danger" role="alert">
                      {error.message}
                    </div>
                  )}
                  <p>
                    <img src={dumbsound} alt="dumbsound-modal-logo" /> - A
                    better place for listening premium song with premium
                    quality.
                  </p>
                  <form id="form-login" onSubmit={this.handleSubmitLogin}>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="E-Mail"
                        value={data.email ? data.email : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={data.password ? data.password : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-modal-signin"
                      disabled={loading}
                    >
                      {loading ? <Spinner animation="border" /> : <>Login</>}
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <p>
                    Not a member yet?{" "}
                    <a
                      href="/#"
                      data-toggle="modal"
                      data-target="#modal-register"
                      data-dismiss="modal"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-register" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create an Account</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.props.clearError()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {errorLogger && (
                    <div className="alert alert-danger" role="alert">
                      {error.message}
                    </div>
                  )}
                  <form onSubmit={this.handleSubmitRegister}>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                      </div>
                      <input
                        name="fullName"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={data.fullName ? data.fullName : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                      </div>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="E-Mail"
                        value={data.email ? data.email : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                      </div>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={data.password ? data.password : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaMale />
                        </span>
                      </div>
                      <div className="form-group gender-select-wrapper">
                        <select
                          className="gender-select"
                          name="gender"
                          onChange={this.handleChange}
                        >
                          <option value="">Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaPhone />
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={data.phone ? data.phone : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLocationArrow />
                        </span>
                      </div>
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={data.address ? data.address : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-modal-signup"
                      disabled={loading}
                    >
                      {loading ? <Spinner animation="border" /> : <>Register</>}
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <p>
                    Already a Member ?{" "}
                    <a
                      href="/#"
                      data-toggle="modal"
                      data-target="#modal-login"
                      data-dismiss="modal"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <nav
        className={
          this.state.showNav
            ? "navbar text-center navbar-expand-lg navbar-dark fixed-top active"
            : "navbar text-center navbar-expand-lg navbar-dark fixed-top hidden"
        }
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link active">
              <li className="nav-item active">
                <img src={logo} alt="left-logo" />
              </li>
              <li className="nav-item active">
                <img src={dumbsound} alt="right-logo" />
              </li>
            </Link>
          </ul>
          {navUsers}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  register,
  login,
  logout,
  clearError,
})(NavigationBar);
