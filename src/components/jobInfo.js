import { Component } from "react"

class JobInfo extends Component {
  render() {
    if(this.props.edit) {
      return (
        <div className="job-info">
          <input name="role" value={this.props.role} className="role" onChange={this.props.handleChange} required />
          <input name="company" value={this.props.company} className="company" onChange={this.props.handleChange} required />
          <ul className="tasks"></ul>
        </div>
      );
    } else {
      return (
        <div className="job-info">
          <p className="role">{this.props.role}</p>
          <p className="company">{this.props.company}</p>
          <ul className="tasks"></ul>
        </div>
      );
    }
  }
}

export default JobInfo;
