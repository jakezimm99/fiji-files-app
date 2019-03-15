import React from 'react';

const ClassList = () => {
    return(
        <div className = 'Files'
        style = {styles.Files}>
            <h2>
            Classes
                
            </h2>
            
            </div>
    )
}
const styles = {
    Files: {
        backgroundColor: 'grey',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    }
}

export default ClassList