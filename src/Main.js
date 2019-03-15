import React from 'react'
import SideBar from './SideBar';
import ClassList from './ClassList';

const Main = () => {
    return(
        <div style = {styles}>
            <SideBar className = 'SideBar'></SideBar>
            <ClassList className = 'ClassList'></ClassList>
        </div>
    )
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
  }

export default Main