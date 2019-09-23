import React from 'react'
import Paper from '../../../Components/Paper/Paper'
import Logo from "../../../Logo/logo.png"
import Input from '../../../Components/Input/Input'
import ButtonPage from '../../../Components/Button/Button'
import CountrySelector from '../../../Components/Input/CountrySelector'
import { Link } from 'react-router-dom';
import { restroSignUp } from '../../../Config/Redux/action'
import { connect } from 'react-redux'


class RestroSignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            account: 'Resturent'
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Paper >
                    <div className="loginDiv">
                        <div style={{textAlign: "center"}}>
                            <img src={Logo} alt='Logo' style={{ width: "6%", minWidth: '160px'}}  />
                        </div>


                        <div style={{ padding: '10px'}}>
                            <h2 className="heading">Register Your Restaurant</h2>
                            <Input type="text" name="Restaurant Name" icon="fa fa-user prefix" onChange={(e)=>this.setState({userName:e.target.value})}/>
                            <Input type="email" name="Email" icon="fa fa-envelope" onChange={(e)=>this.setState({email:e.target.value})}/>
                            <span >Select Country</span> 
                            <CountrySelector onChange={((value)=>this.setState({country: value.label}))}/>
                            <Input type="text" name="City" icon="fa fa-globe" onChange={(e)=>this.setState({city:e.target.value})}/>
                            <span >Chose Certificate</span> 
                            <Input type="file" name="Upload Certificate" icon="fa fa-file" />
                            <span > Chose Cover Photo</span> 
                            <Input type="file" name="Upload Cover Photo" icon="fa fa-file" />
                            <Input type="password" name="Password" icon="fa fa-unlock-alt" onChange={(e)=>this.setState({password :e.target.value})}/>
                            <Input type="password" name="Confrim Password" icon="fa fa-unlock-alt" onChange={(e)=>this.setState({confrimPassword :e.target.value})}/>


                            <div style={{margin: '10px auto', textAlign: 'center'}}> 
                                <ButtonPage name="Register Now" onclick={()=>this.props.restroSignUp(this.state,this.props.history)}/>
                            </div>
                            <div style={{ textAlign: "center"}}>
                            <Link to='/'>Already have a Account ?</Link>
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
        restroSignUp : (value,path) => dispatch(restroSignUp(value,path))
    }
}
export default connect(maptateToProps, mapDispatchToProps)(RestroSignUp)