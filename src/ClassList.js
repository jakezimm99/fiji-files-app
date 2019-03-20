import React from "react";
import Class from "./Class";
import Header from "./Header";

const ClassList = () => {
  return (
    <div className="Files" style={styles.Files}>
      <Header className="Header" />
      <h1 className="Major" style={styles.Major}>
        MA Mathematics
      </h1>
      <p>
        <ul className="List" style={styles.List}>
          <li>
            <Class />
          </li>
          <li>
            <Class />
          </li>
        </ul>
      </p>
    </div>
  );
};
const styles = {
  Files: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(15,15,15,0.75)",
    flex: 1,
    paddingBottom: "1rem",
    overflowY: "scroll",
    alignItems: "flex-start"
  },
  List: {
    listStyle: "none"
  },

  Major: {
    color: "whitesmoke"
  }
};

export default ClassList;
