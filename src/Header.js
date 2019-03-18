import React,{Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div className = 'Header'
            style = {styles.Header}>
                <h2 style = {styles.h2}>Welcome Back "Insert user's name"
                </h2>
            </div>
        )
    }
}

const styles = {
    Header: {
        backgroundColor: '#7e55a8',
        border: '3px solid rgba(0,0,0)',
       
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
      },
    
      h2: {
        fontSize: '1.1rem',
        margin: 0,
        color: 'whitesmoke'
      },
    
      p: {
        color: '#999',
        margin: 0,
        fontSize: '0.8rem',
      }
}

export default Header