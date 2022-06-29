import { Component } from "react"

class JobInfo extends Component {
  render() {
    if(this.props.edit) {
      return (
        <div className="job-info">
          <input className="role" />
          <input className="company" />
          <ul className="tasks"></ul>
        </div>
      );
    } else {
      return (
        <div className="job-info">
          <p className="role">{this.props.job.role}</p>
          <p className="company">{this.props.job.company}</p>
          <ul className="tasks"></ul>
        </div>
      );
    }
  }
}

export default JobInfo;
