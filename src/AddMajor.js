import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'



class AddMajor extends Component {
    state = {
         major : {
             name: '',
             classes: {},
         },
    }
    render() {
        return(
            <div>
                <h2 className = {css(styles.AddMajor)}>Add a Major Here</h2>
                
            </div>
        )
    }
}
const styles = StyleSheet.create({
    AddMajor: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f6f6f6',
      zIndex: 1000,
    },
  
    title: {
      color: '#ff3344',
      fontWeight: 400,
      lineHeight: '80px',
      fontSize: '2rem',
    },
  
    main: {
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      paddingBottom: '3rem',
      width: '40rem',
    },
  
    form: {
      backgroundColor: 'white',
      boxShadow: '0 1px 1px rgba(0,0,0,.1)',
      marginBottom: '2rem',
      padding: '0 2rem 2rem',
    },
  
    label: {
      display: 'block',
      textTransform: 'uppercase',
      color: '#999',
    },
  
    input: {
      fontSize: '1.5rem',
      border: 0,
      borderBottom: '1px solid black',
      margin: '1rem auto',
      textAlign: 'center',
      padding: '0.5rem',
  
      ':focus': {
        outline: 0,
      },
    },
  
    textInput: {
      width: '20rem',
    },
  
    h2: {
      fontWeight: 'normal',
    },
  
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
  
    button: {
      display: 'block',
      padding: '1rem',
      margin: '0 1rem',
      fontSize: '1.2rem',
      borderRadius: '1rem',
      backgroundColor: '#ff3333',
      color: 'white',
      width: '10rem',
      cursor: 'pointer',
      outline: 0,
    },
  
    cancel: {
      backgroundColor: 'white',
      color: '#666',
    },
  })
  
  export default AddMajor