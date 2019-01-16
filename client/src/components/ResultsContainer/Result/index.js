import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    window.location.href = this.props.data.link;
  }
  render() {
    return (
      <div onClick={this.handleSelect} className="result">
        <img
          src={require(`../../../static/${this.props.data.rideService}.png`)}
          className="rideService"
        />
        <div className="priceData">{this.props.data.priceData.price}</div>
        <div className="average"> AVG </div>
      </div>
    );
  }
}
