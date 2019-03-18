import React from 'react';
import Class from './Class'

const ClassList = () => {
    return(
        <div className = 'Files'
        style = {styles.Files}>
            <h1>This is the beginning of classes</h1>
           <p><ul className = 'List'
           style = {styles.List}>
               <li><Class></Class></li>
               <li><Class></Class></li>
            </ul>
            </p>
            </div>
    )
}
const styles = {
    Files: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
        alignItems: 'flex-start'

    },
    List: {
        listStyle: 'none',
    }
}

export default ClassList