import { Component } from "react";
import IconAndText from "./iconAndText";

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
            <button type="button" onClick={this.toggleEdit}>Cancel</button>
            <button type="button">Save</button>
            <input className="person-name" defaultValue={this.state.personName} />
            <input className="occupation" defaultValue={this.state.occupation} />
          </>
        : <>
            <button type="button" onClick={this.toggleEdit}>Edit</button>
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
