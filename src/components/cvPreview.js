import React, { Component } from "react";
import GeneralInformation from "./generalInformation";
import Education from "./education";
import WorkExperience from "./workExperience";
import ScrollContainer from "react-indiana-drag-scroll";

class CvPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 0.7,
    }
    this.previewContainer = React.createRef();
    this.previewElement = React.createRef();
    this.zoom = this.zoom.bind(this);
    this.resizeContainer = this.resizeContainer.bind(this);
    this.centerScroller = this.centerScroller.bind(this);
  }

  componentDidMount() {
    window.requestAnimationFrame(() => {
      this.resizeContainer();
      this.centerScroller();
      window.addEventListener('resize', this.resizeContainer);
    });
  }

  centerScroller() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContainerWidth = scrollContainer.getBoundingClientRect().width;
    const scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
    const previewHeight = this.previewElement.current.getBoundingClientRect().height;
    const previewWidth = this.previewElement.current.getBoundingClientRect().width;
    scrollContainer.scrollTop = (scrollContainerHeight - previewHeight) / 2;
    scrollContainer.scrollLeft = (scrollContainerWidth - previewWidth) / 2;
  }

  resizeContainer() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContainerWidth = scrollContainer.getBoundingClientRect().width;
    const scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
    const previewHeight = this.previewElement.current.getBoundingClientRect().height;
    const previewWidth = this.previewElement.current.getBoundingClientRect().width;
    this.previewContainer.current.style.width = previewWidth < scrollContainerWidth
        ? `${Math.ceil(2 * scrollContainerWidth - previewWidth)}px`
        : `${Math.floor(previewWidth)}px`;
    this.previewContainer.current.style.height = previewHeight < scrollContainerHeight
        ? `${Math.ceil(2 * scrollContainerHeight - previewHeight)}px`
        : `${Math.floor(previewHeight)}px`
  }

  zoom(event) {
    let newScale = this.state.scale;
    newScale += event.deltaY * -0.002;
    if(newScale < 0.1 || newScale > 3) return;
    const element = this.previewElement.current;
    this.setState({
      scale: newScale,
    });
    element.style.transform = `scale(${newScale})`;
    this.resizeContainer();
  }

  render() {
    return (
    <ScrollContainer className="scroll-container" ignoreElements="input, button">
      <div className="cv-preview-container" onWheel={this.zoom} ref={this.previewContainer}>
        <div id="cv-preview" ref={this.previewElement}>
          <GeneralInformation exportMode={this.props.exportMode} />
          <Education
            educationInfo={this.props.educationInfo}
            deleteInfo={(id) => this.props.deleteInfo('educationInfo', id)}
            editInfo={(id, obj) => this.props.editInfo('educationInfo', id, obj)}
            exportMode={this.props.exportMode}
          />
          <WorkExperience
            workInfo={this.props.workInfo}
            deleteInfo={(id) => this.props.deleteInfo('workInfo', id)}
            editInfo={(id, obj) => this.props.editInfo('workInfo', id, obj)}
            exportMode={this.props.exportMode}
          />
        </div>
      </div>
    </ScrollContainer>
    );
  }
}

export default CvPreview;
