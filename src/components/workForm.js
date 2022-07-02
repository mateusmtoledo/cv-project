import { Component } from "react";
import uniqid from "uniqid";

class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      company: '',
      role: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
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
    this.props.addNewInfo('workInfo', obj);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      startDate: '',
      endDate: '',
      company: '',
      role: '',
    });
  }

  render() {
    return (
      <form className="education-form" onSubmit={this.handleSubmit}>
        <h2>Add Work Experience</h2>
        <p className="input-container">
          <label htmlFor="job-start-date">Start Date</label>
          <input name="startDate" value={this.state.startDate} type="month" id="job-start-date" onChange={this.handleChange} required />
        </p>
        <p className="input-container">
          <label htmlFor="job-end-date">End Date</label>
          <input name="endDate" value={this.state.endDate} type="month" id="job-end-date" onChange={this.handleChange} required />
        </p>
        <p className="input-container">
          <label htmlFor="role">Role</label>
          <input name="role" value={this.state.role} type="text" id="role" onChange={this.handleChange} required />
        </p>
        <p className="input-container">
          <label htmlFor="company">Company</label>
          <input name="company" value={this.state.company} type="text" id="company" onChange={this.handleChange} required />
        </p>
        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default WorkForm;
