import { Component } from "react";
import DateComponent from "./date";

class Course extends Component {
  render() {
    return (
      <div>
        <DateComponent />
        <div>
          <p>University of Oxford</p>
          <p>Bachelor of Computer Science</p>
        </div>
      </div>
    );
  }
}

export default Course;
