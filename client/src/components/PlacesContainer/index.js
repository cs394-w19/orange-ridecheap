import React, { Component } from "react";
import PlacePicker from "./PlacePicker";
import SearchButton from "./SearchButton";
import "./index.css";


export default class PlacesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { start: null, end: null };
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);

    this.callOnComplete = this.callOnComplete.bind(this);
  }

  setStart(location) {
    this.setState({ start: location }, this.callOnComplete);
  }

  setEnd(location) {
    this.setState({ end: location }, this.callOnComplete);
  }

  callOnComplete() {
    if (this.state.start && this.state.end) {
      this.props.onGo(this.state.start, this.state.end);
    }
  }

  render() {
    return (
      <div className="placesContainer">
        <PlacePicker removeLocation={this.props.reset} setLocation={this.setStart} placeholder="Start" />
        <PlacePicker removeLocation={this.props.reset} setLocation={this.setEnd} placeholder="End" />
      </div>
    );
  }
}
