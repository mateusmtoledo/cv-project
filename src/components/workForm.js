import { Component } from "react";

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
  }

  handleChange(event) {
    const obj = {};
    const property = event.target.name;
    obj[property] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <form className="education-form">
        <p>
          <label htmlFor="start-date">Start Date</label>
          <input name="startDate" value={this.state.startDate} type="date" id="start-date" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="end-date">End Date</label>
          <input name="endDate" value={this.state.endDate} type="date" id="end-date" onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="role">Role</label>
          <input name="role" value={this.state.role} type="text" id="role" onChange={this.handleChange}></input>
        </p>
        <p>
          <label htmlFor="company">Company</label>
          <input name="company" value={this.state.company} type="text" id="company" onChange={this.handleChange} />
        </p>
        <button>Add</button>
      </form>
    );
  }
}

export default WorkForm;