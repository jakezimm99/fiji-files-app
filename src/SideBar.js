import React from 'react'

const SideBar = () => {
    return (
        <header className = "SideBar"
        style = {styles.SideBar}>
            <div className="Classes">
            <h2>Majors</h2>
            </div>

        </header>

    )
}

const styles = {
    SideBar: {
        alignItems: 'left',
        flexDirection: 'column',
        display: 'flex',
        padding: '1rem 0',
        width: '12rem',
        color: 'rgba{255, 255, 140, 0.8}'

    }
}

export default SideBar