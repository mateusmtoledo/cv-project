import React, { Component } from "react";
import IconAndText from "./iconAndText";
import CANCEL_ICON from "../icons/cancel.svg";
import SAVE_ICON from "../icons/save.svg";
import EDIT_WHITE_ICON from "../icons/edit-white.svg";

class generalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: '',
      occupation: '',
      email: '',
      phone: '',
      linkedin: '',
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
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  toggleEdit() {
    if(this.state.edit) this.setState({ edit: false });
    else this.setState ({ edit: true });
  }

  cancelEdit() {
    for(let key in this.state) {
      if(this.state[key] === '') return;
    }
    this.toggleEdit();
  }

  handleSubmit(e) {
    e.preventDefault();
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
    let buttons;
    let elements;
    if(this.state.edit) {
      if(this.props.exportMode) {
        buttons = null;
      } else {
        buttons = (
          <>
            <div className="buttons">
              <button type="button" onClick={this.cancelEdit}>
                <img width="32px" height="32px" src={CANCEL_ICON} alt="Cancel" />
              </button>
              <button type="submit">
                <img width="32px" height="32px" src={SAVE_ICON} alt="Save" />
              </button>
            </div>
          </>
        );
      }
      elements = (
        <>
          <input name="personName" className="person-name"
            defaultValue={this.state.personName}
            ref={this.input.personName}
            placeholder="Name"
            required
          />
          <input name="occupation" className="occupation"
            defaultValue={this.state.occupation}
            ref={this.input.occupation}
            placeholder="Occupation"
            required
          />
        </>
      );
    } else {
      if(this.props.exportMode) {
        buttons = null;
      } else {
        buttons = (
          <>
            <div className="buttons">
              <button type="button" onClick={this.toggleEdit}>
                <img width="32px" height="32px" src={EDIT_WHITE_ICON} alt="Edit" />
              </button>
            </div>
          </>
        );
      }
      elements = (
        <>
          <p className="person-name">{this.state.personName}</p>
          <p className="occupation">{this.state.occupation}</p>
        </>
      );
    }
    return (
      <div className="general-info">
        <form onSubmit={this.handleSubmit}>
          {buttons}
          {elements}
          <IconAndText ref={this.input.email} type="email" value={this.state.email} edit={this.state.edit} />
          <IconAndText ref={this.input.phone} type="phone" value={this.state.phone} edit={this.state.edit} />
          <IconAndText ref={this.input.linkedin} type="linkedin" value={this.state.linkedin} edit={this.state.edit} />
        </form>
      </div>
    );
  }
}

export default generalInformation;
