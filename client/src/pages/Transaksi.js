import React, { Component } from "react";
import "../components/assets/css/Transaksi.css";
import {
  getTransactions,
  updateTransaction,
} from "../redux/actions/transaction";
import Pagination from "../components/Pagination";
import { connect } from "react-redux";
import dayjs from "dayjs";

class Transaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      transact: "",
      currentPage: 1,
      transactPerPage: 5,
    };
  }

  handleClick = async (id, idUser, status) => {
    this.props.updateTransaction(id, { userId: idUser, status: status });
  };

  searchTransact = (event) => {
    this.setState({ transact: event.target.value });
  };

  paginate = (transactNumber) => this.setState({ currentPage: transactNumber });

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { transactions, loading } = this.props.transactions;
    const { currentPage, transactPerPage } = this.state;

    let dateNow = dayjs();
    let now = dateNow.format("YYYY-MM-DD");
    let data;

    if (transactions === null || loading) {
      return <p>Fetching Data</p>;
    } else {
      let filteredTransact = transactions.data.filter((transaction) => {
        return transaction.status.indexOf(this.state.transact) !== -1;
      });
      const indexOfLastTransact = currentPage * transactPerPage;
      const indexOfFirstTransact = indexOfLastTransact - transactPerPage;
      const currentTransact = filteredTransact.slice(
        indexOfFirstTransact,
        indexOfLastTransact
      );
      data = currentTransact.map((item) => {
        let due_Date = dayjs(item.dueDate);
        return (
          <tr className="transaction-table-data" key={item.User.id}>
            <th scope="row">{item.User.id}</th>
            <td>{item.User.fullName}</td>
            <td>
              <img
                style={{ height: "130px", width: "100px" }}
                src={item.attachment}
                alt="payment_proof"
              />
            </td>
            <td>
              {due_Date.diff(now, "day") > 0 ? due_Date.diff(now, "day") : 0}{" "}
              Days
            </td>
            <td
              style={{
                color: item.status === "approved" ? "#0ACF83" : "#FF0742",
              }}
            >
              {item.status === "approved" ? "Active" : "Not Active"}
            </td>
            <td
              style={{
                color:
                  item.status === "approved"
                    ? "#0ACF83"
                    : item.status === "pending"
                    ? "#F7941E"
                    : "#FF0742",
              }}
            >
              {item.status}
            </td>
            <td>
              <div className="dropdown dropdown-transaction">
                <button
                  className="btn btn-secondary dropdown-toggle btn-transaction"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
                <div
                  className="dropdown-menu dropdown-menu-transaction"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    type="button"
                    className="dropdown-item dropdown-item-transaction"
                    onClick={() =>
                      this.handleClick(item.id, item.User.id, "approved")
                    }
                  >
                    Approved
                  </button>
                  <button
                    type="button"
                    name="rejected"
                    value={item.id}
                    className="dropdown-item dropdown-item-transaction"
                    onClick={() =>
                      this.handleClick(item.id, item.User.id, "rejected")
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className="transaction-table-wrapper">
        <h1>Incoming Transaction</h1>
        <select
          className="trans-filter-select"
          value={this.state.transact}
          onChange={this.searchTransact}
        >
          <option value="">By Payment Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
        <table className="table table-dark text-center transaction-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Users</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Member Period</th>
              <th scope="col">Status User</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {transactions === null || loading ? (
            <p>Fetching Data . . .</p>
          ) : (
            <tbody>{data}</tbody>
          )}
        </table>
        <Pagination
          cardsPerPage={transactPerPage}
          totalCards={transactions.data.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { getTransactions, updateTransaction })(
  Transaksi
);
