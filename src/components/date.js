import { Component } from "react";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.options = {
      timeZone: 'UTC',
      month: 'short',
      year: 'numeric',
    };
    this.startDate = new Date(this.props.startDate).toLocaleDateString('en-US', this.options);
    this.endDate = new Date(this.props.endDate).toLocaleDateString('en-US', this.options);
  }
  render() {
    return (
      <div className="date">
        <p>{`${this.startDate} - ${this.endDate}`}</p>
      </div>
    );
  }
}

export default DateComponent;
