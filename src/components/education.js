import { Component } from "react";
import Course from "./course";
import EDUCATION_ICON from "../icons/education.svg";

class Education extends Component {
  render() {
    return (
      <div className="education-info">
        <div className="heading">
          <img className="icon" src={EDUCATION_ICON} alt="Education" width="24px" height="24px" />
          <h2>Education</h2>
        </div>
        <Course />
      </div>
    );
  }
}

export default Education;
