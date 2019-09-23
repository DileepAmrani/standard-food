import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import TabPanel from '../../Components/Tabs/Tabs'
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        console.log(this.props.state.isEmailVerified)
        return (
            <div>
                <NavBar nav='Profile' path={this.props.history}/>
        
                        <TabPanel />
       
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
export default connect(maptateToProps, mapDispatchToProps)(Home)
