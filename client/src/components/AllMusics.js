import React, { Component } from "react";
import Pagination from "../components/Pagination";
import ReactJkMusicPlayer from "react-jinke-music-player";
import { ToastContainer, toast } from "react-toastify";
import { FaInfo, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMusics } from "../redux/actions/music";
import { connect } from "react-redux";
import "./assets/css/AllMusics.css";
import "./assets/css/MusicPlayer.css";
import "react-toastify/dist/ReactToastify.css";

class AllMusics extends Component {
  constructor() {
    super();
    this.audioInstance = null;
    this.state = {
      playIndex: 0,
      search: "",
      currentPage: 1,
      cardsPerPage: 12,
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  };

  unSubNotify = () => {
    toast.warn(
      <>
        <FaInfo /> Oops, You're not subscribed yet, please go{" "}
        <Link to="/upgrade">here</Link>
      </>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };

  notLoggedIn = () => {
    toast.info(
      <>
        <FaInfo /> Please Login First !
      </>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };

  paginate = (cardNumber) => this.setState({ currentPage: cardNumber });

  componentDidMount() {
    this.props.getMusics();
  }

  render() {
    const { allMusics, loading: load } = this.props.music;
    const { isAuthenticated, data: dataUser } = this.props.auth;
    const { currentPage, cardsPerPage, search, playIndex } = this.state;

    let MusicCard;
    if (allMusics === null || load) {
      return <p>Fetching data</p>;
    } else {
      let filteredMusics = allMusics.Music.filter((music) => {
        return music.Artist.name.toLowerCase().includes(search.toLowerCase());
      });

      const indexOfLastCard = currentPage * cardsPerPage;
      const indexOfFirstCard = indexOfLastCard - cardsPerPage;
      const currentCards = filteredMusics.slice(
        indexOfFirstCard,
        indexOfLastCard
      );

      MusicCard = (
        <div className="container-allmusics-card">
          <div className="row mt-3">
            {currentCards.map((data, index) => {
              return (
                <div className="col-md-2 mb-5" key={data.id}>
                  <div className="card card-all-music px-1">
                    <>
                      <img
                        className="card-img-top card-img-music"
                        src={data.thumbnail}
                        alt="music-card"
                      />
                      {load ? (
                        <p>Checking user. . . .</p>
                      ) : (
                        <div
                          className="card-body card-music p-0 mt-3"
                          style={{ width: "100%" }}
                        >
                          {isAuthenticated ? (
                            dataUser.subscription === true ? (
                              <button
                                type="button"
                                onClick={() =>
                                  this.setState({ playIndex: index })
                                }
                                className="card-title card-title-music"
                              >
                                {data.title}
                              </button>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={this.unSubNotify}
                                  className="card-title"
                                >
                                  {data.title}
                                </button>
                                <ToastContainer
                                  closeButton={false}
                                  style={{ width: "400px" }}
                                />
                              </>
                            )
                          ) : (
                            <>
                              <button
                                type="button"
                                className="card-title"
                                onClick={this.notLoggedIn}
                              >
                                {data.title}
                              </button>
                              <ToastContainer
                                closeButton={false}
                                style={{ width: "400px" }}
                              />
                            </>
                          )}
                          <p className="card-artist-name">{data.Artist.name}</p>
                          <p className="card-text card-text-music">
                            Released : {data.year}
                          </p>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              );
            })}
            <Pagination
              cardsPerPage={cardsPerPage}
              totalCards={allMusics.Music.length}
              paginate={this.paginate}
            />
            {load ? (
              <p>Fetching Data . . . .</p>
            ) : (
              <div
                style={{
                  height: "100px",
                  width: "100%",
                }}
              >
                {isAuthenticated && dataUser.subscription === true ? (
                  <ReactJkMusicPlayer
                    getAudioInstance={(instance) =>
                      (this.audioInstance = instance)
                    }
                    autoPlay={false}
                    audioLists={currentCards.map((music) => ({
                      name: music.title,
                      singer: music.Artist.name,
                      cover: music.thumbnail,
                      musicSrc: music.musicLink,
                    }))}
                    mode="full"
                    playIndex={playIndex}
                    glassBg={true}
                    clearPriorAudioLists={true}
                    showDownload={false}
                    showThemeSwitch={false}
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <h3 className="music-headline text-center">Dengarkan Dan Rasakan</h3>
        {allMusics === null || load ? (
          <p>Fetching Data . . . </p>
        ) : (
          <div className="container-card-music">
            <div className="searchbox-container">
              <input
                className="form-control mr-sm-2 search-music"
                type="text"
                placeholder="Search by Artist . . . "
                value={search}
                onChange={this.updateSearch}
                aria-label="Search"
              />
              <FaSearch size="2em" />
            </div>
            {MusicCard}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  music: state.music,
});

export default connect(mapStateToProps, { getMusics })(AllMusics);
