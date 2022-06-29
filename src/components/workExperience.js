import { Component } from "react";
import Job from "./job";
import WORK_ICON from "../icons/work.svg";

class WorkExperience extends Component {
  render() {
    return (
      <div className="work-info">
        <div className="heading">
          <img className="icon" src={WORK_ICON} alt="Work Experience" width="24px" height="24px" />
          <h2>Work Experience</h2>
        </div>
        <div>
          {this.props.workInfo.map(job => {
            return <Job
              key={job.id}
              job={job}
              deleteInfo={() => this.props.deleteInfo(job.id)}
              editInfo={(obj) => this.props.editInfo(job.id, obj)}
            />
          })}
        </div>
      </div>
    );
  }
}

export default WorkExperience;
