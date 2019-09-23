import React from 'react'
import Paper from '../../../Components/Paper/Paper'
import Logo from "../../../Logo/logo.png"
import Input from '../../../Components/Input/Input'
import ButtonPage from '../../../Components/Button/Button'
import CountrySelector from '../../../Components/Input/CountrySelector'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { userSignUp } from '../../../Config/Redux/action'


class UserSignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            account: 'User'
           
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Paper >
                    <div className="loginDiv">
                        <div style={{ textAlign: "center" }}>
                            <img src={Logo} alt='Logo' style={{ width: "6%", minWidth: '160px'}}  />
                        </div>


                        <div style={{ padding: '10px' }}>
                            <h2 className="heading">User Sign Up</h2>
                            <Input type='text' name="User Name" icon="fa fa-user prefix" onChange={(e)=>this.setState({userName:e.target.value})}/>
                            <Input type='text' name="Email" icon="fa fa-envelope " onChange={(e)=>this.setState({email:e.target.value})}/>
                            <Input type='text' name="Gender" icon="fa fa-transgender-alt " onChange={(e)=>this.setState({gender:e.target.value})}/>
                            <Input type='number' name="Age" icon="fa fa-user prefix" onChange={(e)=>this.setState({age:e.target.value})}/>
                            <span >Select Country</span>
                            <CountrySelector onChange={((value)=>this.setState({country: value.label}))}/>
                            <Input type='text' name="City" icon="fa fa-globe" onChange={(e)=>this.setState({city:e.target.value})}/>
                            <Input type='password' name="Password" icon="fa fa-unlock-alt" onChange={(e)=>this.setState({password:e.target.value})}/>
                            <Input type='password' name="Confrim Password" icon="fa fa-unlock-alt" onChange={(e)=>this.setState({confrimPassword:e.target.value})}/>
                            <div style={{ margin: '10px auto', textAlign: 'center' }}>
                                <ButtonPage name="Sign Up" onclick={()=> this.props.userSignUp(this.state,this.props.history)}/>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                           <span>Already have a Account ?</span> <Link to='/'>Login</Link>
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
        userSignUp : (value,path) => dispatch(userSignUp(value,path))
    }
}
export default connect(maptateToProps, mapDispatchToProps)(UserSignUp)