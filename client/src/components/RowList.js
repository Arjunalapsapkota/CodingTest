import React, { Component } from "react";
import { ListBox } from "./index";

const renderListbox = (data, name) => {
  return data.map(item => <ListBox key={item.id} item={item} name={name} />);
};
class RowList extends Component {
  render() {
    return (
      <div className="RowList container">
        <h6>{this.props.name}</h6>
        <div className="RowListFlex">
          {/* we will render the list only when data is available */}
          {this.props.lists
            ? renderListbox(this.props.lists, this.props.name)
            : null}
        </div>
      </div>
    );
  }
}

export default RowList;
