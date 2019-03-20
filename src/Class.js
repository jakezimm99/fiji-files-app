import React, { Component } from "react";
import File from "./File";

class Class extends Component {
  render() {
    return (
      <div>
        <h3 className="Class" style={styles.Class}>
          MA111
          <ul>
            <File className="File" style={styles.List} />
          </ul>
        </h3>
      </div>
    );
  }
}

const styles = {
  Class: {
    display: "flex",
    color: "whitesmoke",
    backgroundColor: "rgba(0,0,0)",
    alignItems: "flex-start"
  },
  List: {
    listStyle: "none"
  }
};

export default Class;
