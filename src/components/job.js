import { Component } from "react";
import DateComponent from "./date";

class Job extends Component {
  render() {
    return (
      <div className="job">
        <DateComponent />
        <div>
          <p>Software Engineer</p>
          <p>Google, LLC</p>
          <ul className="tasks">
            <li>Vestibulum consequat luctus eros, at convallis quam faucibus ac.</li>
            <li>Maecenas auctor mi sit amet porttitor varius.</li>
            <li>Mauris sit amet nisi sodales, viverra augue molestie, ornare orci.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Job;
