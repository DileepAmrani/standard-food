import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import '../../Containers/Profile/Profile.css'
import Grid from '@material-ui/core/Grid'
import OutlinedTextFields from '../../Components/Input/SimpleInput'
import Button from '../../Components/Button/Button'
import { connect } from 'react-redux'


class UserProfile extends React.Component {
    render() {
        console.log(this.props.payload)
        return (
            <div>
                <NavBar home='Home'  path={this.props.history} />


                <Grid container justify="center" >
                    <Grid item xs={12} sm={8} md={10} lg={6} >
                        <div className='profile'>
                            <h2 className='heading'>My Profile</h2>
                            <hr />
                            <OutlinedTextFields value='a' placeholder='Name' label="Full Name" />
                            <OutlinedTextFields disabled='disabled' value='a' placeholder='Email Address' label="Email" />
                            <OutlinedTextFields value='a' placeholder='Age' label="Age" />
                            <Button name='Edit Profile' />
                        </div>
                    </Grid>
                </Grid>


            </div>
        )
    }
}

const maptateToProps = state => {
    return {
        name: state.name,
        userData: state.payload
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // restroSignUp : (value) => dispatch(restroSignUp(value))
    }
}
export default connect(maptateToProps, mapDispatchToProps)(UserProfile)
