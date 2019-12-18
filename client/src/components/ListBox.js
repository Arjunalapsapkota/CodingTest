import React, { Component } from "react";
import { connect } from "react-redux";
class ListBox extends Component {
  handleClick = event => {
    event.preventDefault(); // prevent the default behavior
    const { name, value } = event.target;
    // object destructring , getting the information about which guy got selected

    // data can be read from the store with :  this.props.store
    let data = this.props.store.data; // load data from the redux store
    let temp = null; // temporary holder for the object
    let indexValue = 0;

    // If a movie from the Recomendations has been clicked ,
    // we will search the movie from the list with its id
    // place it in a temporary holder and delete that object
    // and push that tempo object to myList

    if (name === "Recommendations") {
      data.recommendations.forEach((item, index) => {
        if (item.id === value) {
          indexValue = index;
        }
      });
      temp = data.recommendations[indexValue];
      data.mylist.push(temp);
      data.recommendations.splice(indexValue, 1);
    } else {
      // same thing for Mylist
      data.mylist.forEach((item, index) => {
        if (item.id === value) {
          indexValue = index;
        }
      });
      temp = data.mylist[indexValue];
      data.recommendations.push(temp);
      data.mylist.splice(indexValue, 1);
    }

    // Dispatching the action
    // with new data
    this.props.update(data);
  };
  render() {
    return (
      <div className="box">
        <img
          className="movieImage"
          src={this.props.item.img}
          alt="movie poster"
        />
        <button
          className="btn btn-primary"
          onClick={this.handleClick}
          name={this.props.name}
          value={this.props.item.id}
        >
          {this.props.name === "My List" ? "Remove" : "Add"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state // store is the name of the object,we can call it whatever we want
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // update is our action dispatcher( a simple function, for dispatcing action with data)
    update: data => {
      dispatch({
        type: "update",
        payload: data
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);
