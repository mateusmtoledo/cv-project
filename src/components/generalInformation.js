import { Component } from "react";
import IconAndText from "./iconAndText";
import CANCEL_ICON from "../icons/cancel.svg";
import SAVE_ICON from "../icons/save.svg";
import EDIT_WHITE_ICON from "../icons/edit-white.svg";

class generalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: 'Name',
      occupation: 'Occupation',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'Linkedin',
      edit: true,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    if(this.state.edit) this.setState({ edit: false });
    else this.setState ({ edit: true });
  }

  render() {
    return (
      <div className="general-info">
        {this.state.edit
        ? <>
            <div className="buttons">
              <button type="button" onClick={this.toggleEdit}>
                <img width="32px" height="32px" src={CANCEL_ICON} alt="Cancel" />
              </button>
              <button type="button">
                <img width="32px" height="32px" src={SAVE_ICON} alt="Save" />
              </button>
            </div>
            <input className="person-name" defaultValue={this.state.personName} />
            <input className="occupation" defaultValue={this.state.occupation} />
          </>
        : <>
            <div className="buttons">
              <button type="button" onClick={this.toggleEdit}>
                <img width="32px" height="32px" src={EDIT_WHITE_ICON} alt="Edit" />
              </button>
            </div>
            <p className="person-name">{this.state.personName}</p>
            <p className="occupation">{this.state.occupation}</p>
          </>}
        <IconAndText type="email" value={this.state.email} edit={this.state.edit} />
        <IconAndText type="phone" value={this.state.phone} edit={this.state.edit} />
        <IconAndText type="linkedin" value={this.state.linkedin} edit={this.state.edit} />
      </div>
    );
  }
}

export default generalInformation;
