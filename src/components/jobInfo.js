import { Component } from "react"

class JobInfo extends Component {
  render() {
    return (
      <div className="job-info">
        <p className="role">{this.props.job.role}</p>
        <p className="company">{this.props.job.company}</p>
        <ul className="tasks">
        </ul>
      </div>
    );
  }
}

export default JobInfo;
