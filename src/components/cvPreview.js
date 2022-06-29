import React, { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";
import WorkExperience from "./workExperience";
import ScrollContainer from "react-indiana-drag-scroll";

class CvPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 0.6,
    }
    this.cvPreviewElement = React.createRef();
    this.zoom = this.zoom.bind(this);
  }

  componentDidMount() {
    const scroller = document.querySelector('.scroll-container');
    scroller.scrollTop = (scroller.scrollHeight / 4);
    scroller.scrollLeft = (scroller.scrollWidth / 4);
  }

  zoom(event) {
    const element = this.cvPreviewElement.current;
    let newScale = this.state.scale;
    newScale += event.deltaY * -0.002;
    newScale = Math.min(Math.max(0.3, newScale), 1.185);
    this.setState({
      scale: newScale,
    });
    element.style.transform = `scale(${newScale})`;
  }

  render() {
    return (
    <ScrollContainer className="scroll-container" ignoreElements="input, button">
      <div className="cv-preview-container" onWheel={this.zoom}>
        <div id="cv-preview" ref={this.cvPreviewElement}>
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
