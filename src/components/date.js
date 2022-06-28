import { Component } from "react";

class DateComponent extends Component {
  render() {
    return (
      <div className="date">
        <p>{`${this.props.startDate} - ${this.props.endDate}`}</p>
      </div>
    );
  }
}

export default DateComponent;
