import React, {Component} from 'react'
import SideBar from './SideBar';
import ClassList from './ClassList';
import AddMajor from './AddMajor';

class Main extends Component {
    state = {
        major: {
            name: '',
            description: '',
        },
        majors: {},
        showAddMajor: false,
    }

    addMajor = major => {
        const majors = {...this.state.rooms}
        majors[major.name] = major

        this.setState({majors})
    }

    setcurrentMajor = majorName => {
        const major = this.state.majors[majorName]
        this.setState(major)
    }

    showAddMajor = () => {
        this.setState({showAddMajor : true})
    }

    hideAddMajor = () => {
        this.setState({showAddMajor : false})
    }
    
    render() {
        if(this.state.showAddMajor) {
            return (
                <AddMajor 
                addMajor = {this.AddMajor}
                hideAddMajor = {this.hideAddMajor}>
                </AddMajor>
            )
        }
        return(
        <div style = {styles}>
            <SideBar className = 'SideBar'></SideBar>
            <ClassList className = 'ClassList'></ClassList>
        </div>
    )
}
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
  }

export default Main