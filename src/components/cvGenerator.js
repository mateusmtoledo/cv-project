import { Component } from "react";
import CvPreview from "./cvPreview";
import EducationForm from "./educationForm";
import WorkForm from "./workForm";

class CvGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationInfo: [],
      workInfo: [],
    }
    this.addNewInfo = this.addNewInfo.bind(this);
  }

  addNewInfo(type, obj) {
    this.setState((prev) => {
      const returnObject = {};
      returnObject[type] = prev[type].concat(obj);
      return returnObject;
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="forms">
          <EducationForm addNewInfo={this.addNewInfo} />
          <WorkForm addNewInfo={this.addNewInfo} />
        </div>
        <CvPreview />
      </>
    );
  }
}

export default CvGenerator;
