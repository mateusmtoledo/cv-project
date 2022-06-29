import { Component } from "react";
import DateComponent from "./date";
import JobInfo from "./jobInfo";
import DELETE_ICON from "../icons/delete.svg";
import EDIT_BLACK_ICON from "../icons/edit-black.svg";
import SAVE_ICON from "../icons/save.svg";
import CANCEL_ICON from "../icons/cancel.svg";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      startDate: this.props.job.startDate,
      endDate: this.props.job.endDate,
      company: this.props.job.company,
      role: this.props.job.role,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  cancelEdit() {
    this.setState({
      startDate: this.props.job.startDate,
      endDate: this.props.job.endDate,
      company: this.props.job.company,
      role: this.props.job.role,
    });
    this.toggleEdit();
  }

  saveEdit() {
    this.props.editInfo({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      company: this.state.company,
      role: this.state.role,
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
    const { startDate, endDate, company, role } = this.state;
    return (
      <div className="job">
        <div className="buttons">
          {this.state.edit
            ? <>
                <button>
                  <img src={CANCEL_ICON} alt="Cancel" onClick={this.cancelEdit} />
                </button>
                <button>
                  <img src={SAVE_ICON} alt="Save" onClick={this.saveEdit} />
                </button>
              </>
            : <>
                <button>
                  <img src={EDIT_BLACK_ICON} alt="Edit" onClick={this.toggleEdit} />
                </button>
                <button>
                  <img src={DELETE_ICON} alt="Delete" onClick={() => this.props.deleteInfo(this.props.job.id)} />
                </button>
              </>
          }
        </div>
        <DateComponent edit={this.state.edit} startDate={startDate} endDate={endDate} handleChange={this.handleChange} />
        <JobInfo edit={this.state.edit} company={company} role={role} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Job;
