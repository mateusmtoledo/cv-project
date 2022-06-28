import { Component } from "react";

class CourseInfo extends Component {
  render() {
    return (
      <div className="course-info">
        <p className="institution">{this.props.course.institution}</p>
        <p className="degree">{this.props.course.degree}</p>
      </div>
    );
  }
}

export default CourseInfo;
