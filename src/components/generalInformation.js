import { Component } from "react";
import IconAndText from "./iconAndText";

class generalInformation extends Component {
  render() {
    return (
      <div className="general-info">
        <h4 className="person-name">Carson Jordan</h4>
        <IconAndText type="email" value="a@example.com"/>
        <IconAndText type="phone" value="+1 222-222-2222" />
        <IconAndText type="linkedin" value="linkedin.com/in/example/" />
      </div>
    );
  }
}

export default generalInformation;
