import React, { Component } from "react";
import { connect } from "react-redux";
import { addArtist } from "../redux/actions/artist";
import { getArtists } from "../redux/actions/artist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/assets/css/AddMusic.css";

class AddArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      artistAdded: false,
    };
  }

  handleChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addArtist(this.state.data);
    this.setState({ data: {}, artistAdded: true });
    toast("New Artist Added ! 😎", {
      position: toast.POSITION.TOP_CENTER,
      className: "my-toast",
    });
  };

  componentDidMount() {
    this.props.getArtists();
  }
  render() {
    const { data, artistAdded } = this.state;
    // const { error, errorLogger } = this.props.artist;

    return (
      <>
        <div className="row">
          {artistAdded && <ToastContainer />}
          <div className="container-fluid add-music-wrapper">
            <p id="headline-add-film">Add Artist</p>
            {/* {errorLogger &&
              toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,    <----- Error here please fix later
              })} */}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-title"
                  placeholder="Name"
                  name="name"
                  value={data.name ? data.name : ""}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Old"
                  name="age"
                  value={data.age ? data.age : ""}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="addfilm-select"
                  name="type"
                  onChange={this.handleChange}
                >
                  <option value="">Type</option>
                  <option value="solo">Solo</option>
                  <option value="band">Band</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Start a career"
                  name="startCareer"
                  value={data.startCareer ? data.startCareer : ""}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group btn-add-wrapper">
                <button type="submit" className="btn-save-add-song">
                  Add Artist
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
  };
};

export default connect(mapStateToProps, { getArtists, addArtist })(AddArtist);
