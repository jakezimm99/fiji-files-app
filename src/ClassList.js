import React from 'react';
import Class from './Class'

const ClassList = () => {
    return(
        <div className = 'Files'
        style = {styles.Files}>
            <h1>This is the beginning of classes</h1>
           <ul className = 'List'
           style = {styles.List}>
               <li><Class></Class></li>
               <li><Class></Class></li>
            </ul>
            </div>
    )
}
const styles = {
    Files: {
        display: 'flex',
        backgroundColor: 'grey',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },
    List: {
        listStyle: 'none'
    }
}

export default ClassList