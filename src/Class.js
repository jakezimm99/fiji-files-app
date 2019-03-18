import React, {Component} from 'react'

class Class extends Component {
    render() {
        return(
            <div>
            <h3 className = 'Class'
            style= {styles.Class}>MA111</h3>
            </div>
        )
    }
}

const styles = {
    Class: {
        display: 'flex',
        color: 'whitesmoke',
    }
}

export default Class;