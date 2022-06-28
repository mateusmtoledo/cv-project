import { Component } from "react";
import CvGenerator from "./components/cvGenerator";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CvGenerator />
      </>
    );
  }
}

export default App;
