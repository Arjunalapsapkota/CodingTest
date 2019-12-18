import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    console.log("message: ", this.props);
    return this.props.mylist.map(item => (
      <h5 className="footerText">{item.title}</h5>
    ));
  }
}

export default Footer;
