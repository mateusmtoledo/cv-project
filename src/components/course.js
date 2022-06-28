import { Component } from "react";
import CourseInfo from "./courseInfo";
import DateComponent from "./date";

class Course extends Component {
  render() {
    return (
      <div className="course">
        <DateComponent endDate={this.props.course.endDate} startDate={this.props.course.startDate} />
        <CourseInfo course={this.props.course} />
      </div>
    );
  }
}

export default Course;
