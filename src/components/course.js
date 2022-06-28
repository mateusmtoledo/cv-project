import { Component } from "react";
import DateComponent from "./date";

class Course extends Component {
  render() {
    return (
      <div className="course">
        <DateComponent endDate={this.props.course.endDate} startDate={this.props.course.startDate} />
        <div>
          <p>{this.props.course.institution}</p>
          <p>{this.props.course.degree}</p>
        </div>
      </div>
    );
  }
}

export default Course;
