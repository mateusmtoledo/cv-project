import { Component } from "react";

class CourseInfo extends Component {
  render() {
    if(this.props.edit) {
      return (
        <div className="course-info">
          <input className="institution" />
          <input className="degree" />
        </div>
      );
    } else {
      return (
        <div className="course-info">
          <p className="institution">{this.props.course.institution}</p>
          <p className="degree">{this.props.course.degree}</p>
        </div>
      );
    }
  }
}

export default CourseInfo;
