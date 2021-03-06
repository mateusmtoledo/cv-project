import React from "react";
import { Component } from "react";
import LINKEDIN_ICON from "../icons/linkedin.svg";
import EMAIL_ICON from "../icons/email.svg";
import PHONE_ICON from "../icons/phone.svg";

class IconAndText extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      linkedin: LINKEDIN_ICON,
      email: EMAIL_ICON,
      phone: PHONE_ICON,
    }
  }

  capitalize(string) {
    return (string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase());
  }

  render() {
    return (
      <div className="icon-and-text">
        <img width="20px" src={this.icons[this.props.type]} alt={this.props.type}/>
        {this.props.edit
        ? <input ref={this.props.forwardRef} defaultValue={this.props.value} placeholder={this.capitalize(this.props.type)} required />
        : <p>{this.props.value}</p>
        }
      </div>
    );
  }
}

export default React.forwardRef((props,ref) => <IconAndText {...props} forwardRef={ref} />);
