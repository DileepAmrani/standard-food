import React from 'react'
import { connect } from 'react-redux'
import Paper from '../../Components/Paper/Paper'

class EmailNotVerified extends React.Component {
    render() {
        console.log(this.props.state.isEmailVerified)
        return (
     
                        <Paper>
                            <h2 style={{ textAlign: 'center', color: '#757575', fontWeight: '300' }}>
                                Your Email is Not Verified Please Verify your Email from Your Account.
                             </h2>
                        </Paper>
   
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
export default connect(maptateToProps, mapDispatchToProps)(EmailNotVerified)
