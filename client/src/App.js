// list of imports
import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Navbar, RowList } from "./components"; // import components

//URL has been edited to run both in local machine and production
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://birdiez.herokuapp.com/api"
    : "http://localhost:3090/api";

class App extends Component {
  state = { mylist: null, recommendations: null };

  componentDidMount() {
    // Inorder to display all the results , we will make an api call to the server,
    // we get the data from the server and save it to the persisted redux store
    // then we will make changes to our list
    // but we are not going to make an api call the second time, when user comes back after closing the browser
    // His/her list isn't going to change and we can simply load from the local storage (Persisted redux store)
    // i.e. we check the local storage and make an api call if needed
    // In real apllication we also save the list in database , user can access from any device, but for now lets make it simple
    if (!this.props.store.data)
      fetch(apiUrl, { method: "GET", mode: "cors" })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("received data :", data);
          this.setState(
            {
              mylist: data.mylist,
              recommendations: data.recommendations
            },
            () => {
              this.props.update(this.state);
            }
          );
        })
        .catch(err => console.log(err));
    else {
      const { mylist, recommendations } = this.props.store.data;
      this.setState({ mylist: mylist, recommendations: recommendations });
      // setState has time overhead, we can use callback inside setState if needed
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.store.data ? (
          <RowList lists={this.props.store.data.mylist} name="My List" />
        ) : null}
        {this.props.store.data ? (
          <RowList
            lists={this.props.store.data.recommendations}
            name="Recommendations"
          />
        ) : null}
      </React.Fragment>
    );
  }
}
// reading the store and passing it to the component
// data inside the component can be accessed with this.props.store
const mapStateToProps = state => {
  return {
    store: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: data => {
      dispatch({
        type: "update",
        payload: data
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
