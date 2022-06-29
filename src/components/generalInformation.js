import React, { Component } from "react";
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
    this.input = {
      personName: React.createRef(),
      occupation: React.createRef(),
      email: React.createRef(),
      phone: React.createRef(),
      linkedin: React.createRef(),
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    if(this.state.edit) this.setState({ edit: false });
    else this.setState ({ edit: true });
  }

  handleSubmit() {
    const newObj = {}
    for(let key in this.input) {
      if(this.input.hasOwnProperty(key)) {
        newObj[key] = this.input[key].current.value;
      }
    }
    this.setState(newObj);
    this.toggleEdit();
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
              <button type="button" onClick={this.handleSubmit}>
                <img width="32px" height="32px" src={SAVE_ICON} alt="Save" />
              </button>
            </div>
            <input name="personName" className="person-name" defaultValue={this.state.personName} ref={this.input.personName} />
            <input name="occupation" className="occupation" defaultValue={this.state.occupation} ref={this.input.occupation} />
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
        <IconAndText ref={this.input.email} type="email" value={this.state.email} edit={this.state.edit} />
        <IconAndText ref={this.input.phone} type="phone" value={this.state.phone} edit={this.state.edit} />
        <IconAndText ref={this.input.linkedin} type="linkedin" value={this.state.linkedin} edit={this.state.edit} />
      </div>
    );
  }
}

export default generalInformation;
