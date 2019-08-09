import React, { Component } from "react";
import * as firebase from 'firebase';

class AddMajor extends Component {
  state = {
    major: {
      name: "",
      classes: {}
    }
  };

  handleChange = ev => {
    const major = { ...this.state.major };
    major[ev.target.major] = ev.target.value;
    this.setState({ major });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    var firebaseRef = firebase.database().ref().child("Department");
    firebaseRef.child("Department Name").child("Abbreviation").set("The Abbreviation");

    //this.props.addMajor(this.state.major);
    //this.props.hideRoomForm();
  };
  render() {
    return (
      <div style={styles.AddMajor}>
        <h2 className={styles.title}>Add a Major Here</h2>
        <form
          className={styles.form}
          style={styles.form}
          onSubmit={this.handleSubmit}
        >
          <p>
            <label htmlFor="name" className={styles.label} style={styles.label}>
              Major Name
            </label>
            <input
              autoFocus
              required
              type="text"
              name="name"
              style={styles.input}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="Major" style={styles.label}>
              Major Abbreviation
            </label>
            <input
              className={styles.input}
              style={styles.input}
              name="Abbreviation"
              onChange={this.handleChange}
            />
          </p>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.cancel}
              style={styles.button}
              onClick={this.props.hideRoomForm}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.button}
              style={styles.button}
            >
              Add Major
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const styles = {
  AddMajor: {
    position: "center",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f6f6f6",
    zIndex: "1000"
  },

  title: {
    color: "#ff3344",
    fontWeight: "400",
    lineHeight: "80px",
    fontSize: "2rem"
  },

  main: {
    flex: "1",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    paddingBottom: "3rem",
    width: "40rem"
  },

  form: {
    backgroundColor: "white",
    boxShadow: "0 1px 1px rgba(0,0,0,.1)",
    marginBottom: "2rem",
    padding: "0 2rem 2rem"
  },

  label: {
    display: "block",
    textTransform: "uppercase",
    color: "#999"
  },

  input: {
    fontSize: "1.5rem",
    border: 0,
    borderBottom: "1px solid black",
    margin: "1rem auto",
    textAlign: "center",
    padding: "0.5rem",

    ":focus": {
      outline: "0"
    }
  },

  textInput: {
    width: "20rem"
  },

  h2: {
    fontWeight: "normal"
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  },

  button: {
    display: "block",
    padding: "1rem",
    margin: "0 1rem",
    fontSize: "1.2rem",
    borderRadius: "1rem",
    backgroundColor: "#ff3333",
    color: "white",
    width: "10rem",
    cursor: "pointer",
    outline: "0"
  },

  cancel: {
    backgroundColor: "white",
    color: "#666"
  }
};

export default AddMajor;
