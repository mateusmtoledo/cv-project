import { Component } from "react";
import LINKEDIN_ICON from "../icons/linkedin.jpg";
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

  render() {
    return (
      <div>
        <img width="16px" src={this.icons[this.props.type]} alt={this.props.type}/>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default IconAndText;
