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
        position: 'relative',
        color: 'whitesmoke',
    }
}

export default Class;