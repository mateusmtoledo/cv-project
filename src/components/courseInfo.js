import { Component } from "react";

class CourseInfo extends Component {
  render() {
    if(this.props.edit) {
      return (
        <div className="course-info">
          <input name="institution" className="institution" value={this.props.institution} onChange={this.props.handleChange} required />
          <input name="degree" className="degree" value={this.props.degree} onChange={this.props.handleChange} required />
        </div>
      );
    } else {
      return (
        <div className="course-info">
          <p className="institution">{this.props.institution}</p>
          <p className="degree">{this.props.degree}</p>
        </div>
      );
    }
  }
}

export default CourseInfo;
