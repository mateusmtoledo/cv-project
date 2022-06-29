import { Component } from "react";
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
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    if(this.state.edit) this.setState({ edit: false });
    else this.setState ({ edit: true });
  }

  render() {
    return (
      <div className="course">
        <div className="buttons">
          {this.state.edit
            ? <>
                <button>
                  <img src={CANCEL_ICON} alt="Cancel" onClick={this.toggleEdit} />
                </button>
                <button>
                  <img src={SAVE_ICON} alt="Save" />
                </button>
              </>
            : <>
                <button>
                  <img src={EDIT_BLACK_ICON} alt="Edit" onClick={this.toggleEdit} />
                </button>
                <button>
                  <img src={DELETE_ICON} alt="Delete" />
                </button>
              </>
          }
        </div>
        <DateComponent edit={this.state.edit} endDate={this.props.course.endDate} startDate={this.props.course.startDate} />
        <CourseInfo edit={this.state.edit} course={this.props.course} />
      </div>
    );
  }
}

export default Course;
