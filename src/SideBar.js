import React from 'react'

const SideBar = () => {
    return (
        <header className = "SideBar"
        style = {styles.SideBar}>
            <div className="Classes">
            <h2 className = "MajorHeader">Majors</h2>
            </div>

        </header>

    )
}

const styles = {
    SideBar: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
        padding: '1rem 0',
        width: '12rem',
        backgroundColor: 'purple'

    },
    MajorHeader: {
        fontColor: 'rgba(200,200,200, 0.9)'
    }
}

export default SideBar