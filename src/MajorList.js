import React, { Component } from "react";

import Major from "./Major";

const MajorList = ({ showAddMajor, setCurrentMajor, majors }) => {
  return (
    <div>
      <button className="button" style={styles.button} onClick={showAddMajor}>
        <i className="fas fa-plus-circle" />
        Add a Major
      </button>
    </div>
  );
};

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
