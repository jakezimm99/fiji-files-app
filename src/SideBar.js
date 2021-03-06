import React from "react";
import MajorList from "./MajorList";

const SideBar = ({ showAddMajor, setCurrentMajor, majors }) => {
  return (
    <header className="SideBar" style={styles.SideBar}>
      <div className="Classes">
        <h2 className="MajorHeader" style={styles.MajorHeader}>
          Majors
        </h2>
        <MajorList
          style={styles.MajorList}
          showAddMajor={showAddMajor}
          setCurrentMajor={setCurrentMajor}
          majors={majors}
        />
      </div>
    </header>
  );
};

const styles = {
  SideBar: {
    alignItems: "flex-start",
    flexDirection: "column",
    display: "flex",
    padding: "1rem 0",
    width: "15rem",
    backgroundColor: "rgba(30,30,30,0.95)"
  },
  MajorHeader: {
    color: "rgba(255,255,255,0.75)"
  },
  MajorList: {
    display: "flex",
    flexDirection: "column",
    button: ""
  }
};

export default SideBar;
