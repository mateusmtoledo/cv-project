import React, { Component } from "react";
import CourseInfo from "./courseInfo";
import DateComponent from "./date";
import DELETE_ICON from "../icons/delete.svg";
import EDIT_BLACK_ICON from "../icons/edit-black.svg";
import SAVE_ICON from "../icons/save.svg";
import CANCEL_ICON from "../icons/cancel.svg";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      startDate: this.props.course.startDate,
      endDate: this.props.course.endDate,
      institution: this.props.course.institution,
      degree: this.props.course.degree,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  cancelEdit() {
    this.setState({
      startDate: this.props.course.startDate,
      endDate: this.props.course.endDate,
      institution: this.props.course.institution,
      degree: this.props.course.degree,
    });
    this.toggleEdit();
  }
  
  saveEdit(e) {
    e.preventDefault();
    this.props.editInfo({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      institution: this.state.institution,
      degree: this.state.degree,
    });
    this.toggleEdit();
  }

  toggleEdit() {
    if(this.state.edit) this.setState({ edit: false });
    else this.setState ({ edit: true });
  }

  handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { startDate, endDate, institution, degree } = this.state;
    return (
      <form onSubmit={this.saveEdit}>
        <div className="data">
          <div className="buttons">
            {this.state.edit
              ? <>
                  <button type="button" onClick={this.cancelEdit}>
                    <img src={CANCEL_ICON} alt="Cancel" />
                  </button>
                  <button type="submit">
                    <img src={SAVE_ICON} alt="Save" />
                  </button>
                </>
              : <>
                  <button type="button" onClick={this.toggleEdit} style={{display: this.props.exportMode ? 'none' : null }}>
                    <img src={EDIT_BLACK_ICON} alt="Edit" />
                  </button>
                  <button type="button" onClick={this.props.deleteInfo} style={{display: this.props.exportMode ? 'none' : null }}>
                    <img src={DELETE_ICON} alt="Delete" />
                  </button>
                </>
            }
          </div>
          <DateComponent edit={this.state.edit} startDate={startDate} endDate={endDate} handleChange={this.handleChange} />
          <CourseInfo edit={this.state.edit} institution={institution} degree={degree} handleChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default Course;
