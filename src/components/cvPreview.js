import { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";
import WorkExperience from "./workExperience";

class CvPreview extends Component {
  render() {
    return (
    <div id="preview-container">
      <div id="cv-preview">
        <GeneralInformation />
        <Education />
        <WorkExperience />
      </div>
    </div>
    );
  }
}

export default CvPreview;
