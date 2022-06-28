import { Component } from "react";
import DateComponent from "./date";
import JobInfo from "./jobInfo";

class Job extends Component {
  render() {
    return (
      <div className="job">
        <DateComponent startDate={this.props.job.startDate} endDate={this.props.job.endDate} />
        <JobInfo job={this.props.job} />
      </div>
    );
  }
}

export default Job;
