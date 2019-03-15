import React from 'react'
import SideBar from './SideBar';
import Files from './Files';

const Main = () => {
    return(
        <div>
            <SideBar className = 'SideBar'
            styles = {style.SideBar}></SideBar>
            <Files className = 'Files'
            styles = {style.Files}></Files>
        </div>
    )
}

const style = {
    SideBar: {
        display: 'flex'
    },

    Files: {
        display: 'flex'
    }
}

export default Main