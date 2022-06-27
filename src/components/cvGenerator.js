import { Component } from "react";
import CvPreview from "./cvPreview";
import EducationForm from "./educationForm";
import WorkForm from "./workForm";

class CvGenerator extends Component {
  render() {
    return (
      <>
        <div className="forms">
          <EducationForm />
          <WorkForm />
        </div>
        <CvPreview />
      </>
    );
  }
}

export default CvGenerator;
