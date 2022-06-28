import { Component } from "react";
import uniqid from "uniqid";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      institution: '',
      degree: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const obj = {};
    const property = event.target.name;
    obj[property] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {
      ...this.state,
      id: uniqid(),
    }
    this.props.addNewInfo('educationInfo', obj);
  }

  render() {
    return (
      <form className="education-form" onSubmit={this.handleSubmit}>
        <h2>Add Education Information</h2>
        <p className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <input name="startDate" value={this.state.startDate} type="month" id="start-date" onChange={this.handleChange} />
        </p>
        <p className="input-container">
          <label htmlFor="end-date">End Date</label>
          <input name="endDate" value={this.state.endDate} type="month" id="end-date" onChange={this.handleChange} />
        </p>
        <p className="input-container">
          <label htmlFor="institution">Institution</label>
          <input name="institution" value={this.state.institution} type="text" id="institution" onChange={this.handleChange} />
        </p>
        <p className="input-container">
          <label htmlFor="degree">Degree</label>
          <input name="degree" value={this.state.degree} type="text" id="degree" onChange={this.handleChange}></input>
        </p>
        <div className="buttons">
          <button type="button">Clear</button>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default EducationForm;
