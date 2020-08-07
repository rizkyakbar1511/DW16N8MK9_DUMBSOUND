import React, { Component } from "react";
import { FaPaperclip, FaLink } from "react-icons/fa";
import { connect } from "react-redux";
import { addMusic } from "../redux/actions/music";
import { getArtists } from "../redux/actions/artist";
import "../components/assets/css/AddMusic.css";

class AddMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      musicAdded: false,
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
    this.props.addMusic(this.state.data);
    this.setState({ data: {}, musicAdded: true });
  };

  componentDidMount() {
    this.props.getArtists();
  }
  render() {
    const { allArtists, loading } = this.props.artist;
    const { error, errorLogger } = this.props.music;

    const { data } = this.state;

    return (
      <>
        <div>
          <div className="container-fluid add-music-wrapper">
            <p id="headline-add-film">Add Music</p>
            {errorLogger && (
              <div className="alert alert-danger" role="alert">
                {error.message}
              </div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-title"
                  placeholder="Title"
                  name="title"
                  value={data.title ? data.title : ""}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control upload-thumbnail-addfilm"
                  placeholder="Attach Thumbnail"
                  name="thumbnail"
                  value={data.thumbnail ? data.thumbnail : ""}
                  onChange={this.handleChange}
                />
                <div className="input-group-prepend prepend-wrapper">
                  <span className="input-group-text fa-paper-clip-add-film prepend-content">
                    <FaPaperclip />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Year"
                  name="year"
                  value={data.year ? data.year : ""}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                {allArtists === null || loading ? (
                  <p>Fetching Data. . . .</p>
                ) : (
                  <select
                    className="addfilm-select"
                    name="artistId"
                    onChange={this.handleChange}
                  >
                    <option value="">Singer</option>
                    {allArtists.status.data.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control upload-musicLink"
                  placeholder="Music Link"
                  name="musicLink"
                  value={data.musicLink ? data.musicLink : ""}
                  onChange={this.handleChange}
                />
                <div className="input-group-prepend prepend-wrapper">
                  <span className="input-group-text fa-paper-clip-add-film prepend-content">
                    <FaLink />
                  </span>
                </div>
              </div>
              <div className="form-group btn-add-wrapper">
                <button type="submit" className="btn-save-add-song">
                  Add Song
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
    music: state.music,
    artist: state.artist,
  };
};

export default connect(mapStateToProps, { getArtists, addMusic })(AddMusic);
