import { Component } from "react";
import Course from "./course";

class Education extends Component {
  render() {
    return (
      <div className="education-info">
        <h3>Education</h3>
        <Course />
      </div>
    );
  }
}

export default Education;
