import { Component } from "react";
import GITHUB_ICON from "../icons/github.png";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>cv project</h1>
        <a className="github-link" href="https://github.com/mateusmtoledo">
          <img width="32px" height="32px" src={GITHUB_ICON} alt="GitHub" />
          <p>mateusmtoledo</p>
        </a>
      </header>
    );
  }
}

export default Header;
