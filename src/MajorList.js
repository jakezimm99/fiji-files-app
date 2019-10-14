import React from "react";

<<<<<<< HEAD
=======
//import Major from "./Major";
import * as firebase from 'firebase';

>>>>>>> 303651254bf3f6a7e2b0fcae875862407256300f

const MajorList = ({ showAddMajor, setCurrentMajor, majors }) => {
  return (
    <div>

      <button className="button" style={styles.button} onClick={showAddMajor}>
        <i className="fas fa-plus-circle" />
        Add a Major
      </button>

      <br></br>

      <h2 id = "department"></h2>
      <script src = "https://code.jquery.com/jquery-3.1.0.js"></script>
      <script src = "Major.js"></script>
      Tes
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
