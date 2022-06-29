import { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";
import WorkExperience from "./workExperience";
import ScrollContainer from "react-indiana-drag-scroll";

class CvPreview extends Component {
  componentDidMount() {
    const scroller = document.querySelector('.scroll-container');
    scroller.scrollTop = (scroller.scrollHeight / 4);
    scroller.scrollLeft = (scroller.scrollWidth / 4);
  }
  render() {
    return (
    <ScrollContainer className="scroll-container" ignoreElements="input, button">
      <div className="cv-preview-container">
        <div id="cv-preview">
          <GeneralInformation />
          <Education
            educationInfo={this.props.educationInfo}
            deleteInfo={(id) => this.props.deleteInfo('educationInfo', id)}
            editInfo={(id, obj) => this.props.editInfo('educationInfo', id, obj)}
            />
          <WorkExperience
            workInfo={this.props.workInfo}
            deleteInfo={(id) => this.props.deleteInfo('workInfo', id)}
            editInfo={(id, obj) => this.props.editInfo('workInfo', id, obj)}
          />
        </div>
      </div>
    </ScrollContainer>
    );
  }
}

export default CvPreview;
