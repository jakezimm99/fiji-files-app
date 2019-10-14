import React, { Component } from "react";
import SideBar from "./SideBar";
import ClassList from "./ClassList";
import AddMajorForm from "./AddMajorForm";

class Main extends Component {
  state = {
    major: {
      name: "Mathematics",
      Abbreviation: "MA"
    },
    majors: {},
    showAddMajor: false
  }

  addMajor = major => {
    const majors = { ...this.state.majors };
    majors[major.name] = major;

    this.setState({ majors });
  };

  setcurrentMajor = majorName => {
    const major = this.state.majors[majorName];
    this.setState(major);
  };

  showAddMajor = () => {
    this.setState({ showAddMajor: true });
  };

  hideAddMajor = () => {
    this.setState({ showAddMajor: false });
  };

  render() {
    if (this.state.showAddMajor) {
      return (
        <AddMajorForm AddMajor={this.AddMajor} hideAddMajor={this.hideAddMajor} />
      );
    }
    return (
      <div style={styles}>
        <SideBar
          className="SideBar"
          showAddMajor={this.showAddMajor}
          setcurrentMajor={this.setcurrentMajor}
          majors={this.majors}
        />
        <ClassList className="ClassList" />
      </div>
    );
  }
}

const styles = {
  display: "flex",
  alignItems: "stretch",
  height: "100vh"
};

export default Main;
