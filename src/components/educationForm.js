import { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      institution: '',
      course: '',
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
    }
    this.props.addNewInfo('educationInfo', obj);
  }

  render() {
    return (
      <form className="education-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="start-date">Start Date</label>
          <input name="startDate" value={this.state.startDate} type="date" id="start-date" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="end-date">End Date</label>
          <input name="endDate" value={this.state.endDate} type="date" id="end-date" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="institution">Institution</label>
          <input name="institution" value={this.state.institution} type="text" id="institution" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="course">Course</label>
          <input name="course" value={this.state.course} type="text" id="course" onChange={this.handleChange}></input>
        </p>
        <button>Add</button>
      </form>
    );
  }
}

export default EducationForm;
