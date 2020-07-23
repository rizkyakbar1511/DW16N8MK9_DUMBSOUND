import React, { Component } from "react";
import { FaPaperclip, FaEnvelope } from "react-icons/fa";
import dumbsound from "../components/assets/img/dumbsound.png";
import "../components/assets/css/Upgrade.css";
import { connect } from "react-redux";
import { addTransaction } from "../redux/actions/upgrade";
import { login } from "../redux/actions/auth";
import { Modal, Button, Card } from "react-bootstrap";

class Upgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        userId: this.props.auth.data.id,
        upgrading: false,
        showModal: false,
      },
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.addTransaction(this.state.data);
    this.setState({ data: {}, upgrading: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    if (!this.props.auth.data.subscription)
      return this.setState({ showModal: true });
  }

  render() {
    const { data: dataUser } = this.props.auth;
    const { data, upgrading, showModal } = this.state;

    return (
      <div className="container">
        <Modal
          className="text-center"
          show={showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Card
              style={{
                width: "100%",
                height: "100%",
                background: "inherit",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src={require("../components/assets/img/jumbotron-bg.jpg")}
              />
              <div className="price-tag-wrapper">
                <h1 className="card-title pricing-card-title">
                  IDR 150.000 <small>/ mo</small>
                </h1>
              </div>
              <Card.Body>
                <Card.Title>Pick your Premium</Card.Title>
                <Card.Subtitle className="mb-2 card-subtitle">
                  Listen without limits on your phone, speaker, and other
                  devices.
                </Card.Subtitle>
                <Card.Text className="card-text-pricing">
                  Unlimited Song Access
                </Card.Text>
                <Card.Text className="card-text-pricing">
                  Email Support
                </Card.Text>
                <Card.Text className="card-text-pricing">
                  Get 1 Month Additional Plan till 1st July
                </Card.Text>
                <Button
                  className="btn-upgrade-modal"
                  onClick={this.handleCloseModal}
                >
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <div className="card text-center card-upgrade">
          <div className="card-body card-body-upgrade">
            <h1 className="card-title card-title-upgrade">Premium</h1>
            {upgrading ? (
              <div className="alert alert-success" role="alert">
                Thank you , please wait for further confirmation from our team
              </div>
            ) : null}
            <p className="card-text card-text-upgrade">
              Upgrade sekarang dan nikmati Music Premium Tanpa Batas di{" "}
              <img src={dumbsound} alt="dumbsound_logo" />
              .id
            </p>
            <p className="card-text card-text-upgrade">
              <span id="accNumber">Account No :</span> DW16N8MK9
            </p>

            <p id="status">
              Status :{" "}
              <span
                style={{
                  color: dataUser.subscription === true ? "#0ACF83" : "#FF0742",
                }}
              >
                {dataUser.subscription ? "Active" : "Not Active"}
              </span>
            </p>

            <div className="upgrade-input">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="accountNumber"
                    value={data.accountNumber ? data.accountNumber : ""}
                    className="form-control"
                    placeholder="Input your account number"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="btn-add-attachment-wrapper">
                  <button
                    type="button"
                    className="btn btn-attach"
                    data-toggle="modal"
                    data-target="#modal-add-attachment"
                  >
                    Attache proof of payment <FaPaperclip />
                  </button>
                  <button className="btn btn-send" type="submit">
                    <FaEnvelope /> Send
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="modal-add-attachment"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered modal-all-wrapper">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title"> Payment Proof Link</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control upload-thumbnail"
                            placeholder="Attach Link"
                            name="attachment"
                            value={data.attachment ? data.attachment : ""}
                            onChange={this.handleChange}
                          />
                          <div className="input-group-prepend prepend-wrapper2">
                            <span className="input-group-text fa-paper-clip prepend-content2">
                              <FaPaperclip />
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-modal-add"
                          data-dismiss="modal"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addTransaction: state.addTransaction,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addTransaction,
  login,
})(Upgrade);
