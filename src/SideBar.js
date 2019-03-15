import React from 'react'

const SideBar = () => {
    return (
        <header className = "SideBar"
        style = {styles.SideBar}>
            <div className="Classes">
            <h2>Courses</h2>

            </div>

        </header>

    )
}

const styles = {
    SideBar: {
        alignItems: 'left',
        backgroundColor: 'purple',
    }
}

export default SideBar