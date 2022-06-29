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
    this.deleteInfo = this.deleteInfo.bind(this);
    this.editInfo = this.editInfo.bind(this);
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

  render() {
    return (
      <main>
        <div className="forms">
          <EducationForm addNewInfo={this.addNewInfo} />
          <WorkForm addNewInfo={this.addNewInfo} />
        </div>
        <CvPreview educationInfo={this.state.educationInfo} workInfo={this.state.workInfo} deleteInfo={this.deleteInfo} editInfo={this.editInfo} />
      </main>
    );
  }
}

export default CvGenerator;
