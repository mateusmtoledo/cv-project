import { Component } from "react";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.options = {
      timeZone: 'UTC',
      month: 'short',
      year: 'numeric',
    };
  }
  render() {
    const startDate = new Date(this.props.startDate).toLocaleDateString('en-US', this.options);
    const endDate = new Date(this.props.endDate).toLocaleDateString('en-US', this.options);
    if (this.props.edit) {
      return (
        <div className="date">
          <input name="startDate" type="month" value={this.props.startDate} onChange={this.props.handleChange} required />
          <input name="endDate" type="month" value={this.props.endDate} onChange={this.props.handleChange} required />
        </div>
      );
    } else {
      return (
        <div className="date">
          <p>{`${startDate} - ${endDate}`}</p>
        </div>
      );
    }
  }
}

export default DateComponent;
