import * as firebase from 'firebase';

class Major{

getAbbrevs = () => {
var rootRef = firebase.database().ref().child("Department");
rootRef.on("child_added", snap => {

var abbreviation = snap.child("Abbreviation").val();

$("#departments").append(
  "<button className=\"button\" style={styles.button} onClick={showAddMajor}> <i className=\"fas fa-plus-circle\" /> " + abbreviation + " </button>");
});
}

}
