import React, { Component } from "react";

class MajorList extends Component {
  render() {
    return (
      <div>
        <button className="button" style={styles.button}>
          <i className="fas fa-plus-circle" />
          Add a Major
        </button>
      </div>
    );
  }
}

const styles = {
  button: {
    border: 0,
    backgroundColor: "transparent",
    outline: 0,
    padding: 0,
    color: "rgba(255,255,255,0.4)",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "color 0.25s ease-out"
  }
};

export default MajorList;
