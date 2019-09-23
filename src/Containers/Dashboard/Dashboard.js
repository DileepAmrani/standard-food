import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import DashboardNavTabs from '../../Components/Tabs/DashboardTab'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    render() {
        console.log(this.props.state.isEmailVerified)
        return (
            <div>
                <NavBar nav='Profile' path={this.props.history}/>
        
                <DashboardNavTabs />
       
            </div>
        )
    }

}



const maptateToProps = state => {
    return {
        state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // login : (value) => dispatch(login(value))
    }
}
export default connect(maptateToProps, mapDispatchToProps)(Dashboard)
