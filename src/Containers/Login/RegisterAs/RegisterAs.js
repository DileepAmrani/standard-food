import React from 'react'
import Paper from '../../../Components/Paper/Paper'
import Logo from "../../../Logo/logo.png"
import '../../../Containers/Login/Login.css'
import Input from '../../../Components/Input/Input'
import ButtonPage from '../../../Components/Button/Button'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../../../Config/Redux/action'

class RegisterAs extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <Paper >
                    <div className="loginDiv">
                        <div style={{textAlign: "center"}}>
                            <img src={Logo} alt='Logo' style={{ width: "6%", minWidth: '160px'}} />
                        </div>
         
                    <div style={{ padding: '30px' }}>
                            <h2 className="heading">Sign Up With</h2>
   
                            <div style={{margin: '10px auto', textAlign: 'center'}}> 
                            <Link to="/user-sign-up"><ButtonPage name="Sign Up As a User" onclick={()=>this.props.login(this.state,this.props.history)}/></Link>
                            <Link to="/restro-sign-up"><ButtonPage name="Sign Up As Resturent" onclick={()=>this.props.login(this.state,this.props.history)}/></Link>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }

}

const maptateToProps = state =>{
    return {
        name: state.name
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        login : (value,path) => dispatch(login(value,path))
    }
}
export default connect(maptateToProps, mapDispatchToProps)(RegisterAs)
