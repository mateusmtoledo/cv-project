import { Component } from "react";
import CvPreview from "./cvPreview";
import EducationForm from "./educationForm";
import WorkForm from "./workForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDF_ICON from "../icons/pdf.svg";

class CvGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationInfo: [],
      workInfo: [],
      exportMode: false,
    }
    this.addNewInfo = this.addNewInfo.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
    this.editInfo = this.editInfo.bind(this);
    this.exportPdf = this.exportPdf.bind(this);
  }

  addNewInfo(type, obj) {
    this.setState((prev) => {
      const returnObject = {};
      returnObject[type] = prev[type].concat(obj);
      return returnObject;
    });
  }

  deleteInfo(type, id) {
    const newArr = this.state[type].filter((element) => element.id !== id);
    this.setState({
      [type]: newArr,
    });
  }

  editInfo(type, id, obj) {
    const index = this.state[type].findIndex((el) => el.id === id);
    this.setState((prev) => {
      const newState = {...prev};
      newState[type][index] = { ...newState[type][index], ...obj};
      return newState;
    });
  }

  exportPdf() {
    const input = document.getElementById('cv-preview');
    if(input.querySelector('input') !== null) {
      alert('You must save all changes before exporting!');
      return;
    }
    input.style.transform = 'scale(1)';
    this.setState({ exportMode: true }, () => {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("cv.pdf");
        input.style.removeProperty('transform');
        this.setState({ exportMode: false });
      });
    });
  }

  render() {
    return (
      <main>
        <div className="forms">
          <EducationForm addNewInfo={this.addNewInfo} />
          <WorkForm addNewInfo={this.addNewInfo} />
          <button type="button" className="export-pdf" onClick={this.exportPdf}>
            <p>Export</p>
            <img width="24px" height="24px" src={PDF_ICON} alt="Export as PDF" />
          </button>
        </div>
        <CvPreview
          educationInfo={this.state.educationInfo}
          workInfo={this.state.workInfo}
          deleteInfo={this.deleteInfo}
          editInfo={this.editInfo}
          exportMode={this.state.exportMode}
        />
      </main>
    );
  }
}

export default CvGenerator;
