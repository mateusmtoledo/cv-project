import { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";
import WorkExperience from "./workExperience";

class CvPreview extends Component {
  render() {
    return (
    <div>
      <GeneralInformation />
      <Education />
      <WorkExperience />
    </div>
    );
  }
}

export default CvPreview;
