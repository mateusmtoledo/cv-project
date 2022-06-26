import { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";

class CvPreview extends Component {
  render() {
    return (
    <div>
      <GeneralInformation />
      <Education />
    </div>
    );
  }
}

export default CvPreview;
