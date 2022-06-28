import { Component } from "react";
import DateComponent from "./date";

class Job extends Component {
  render() {
    return (
      <div className="job">
        <DateComponent startDate={this.props.job.startDate} endDate={this.props.job.endDate} />
        <div>
          <p>{this.props.job.role}</p>
          <p>{this.props.job.company}</p>
          <ul className="tasks">
          </ul>
        </div>
      </div>
    );
  }
}

export default Job;
