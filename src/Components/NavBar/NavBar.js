import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from "../../Logo/logo2.png"
import { signout } from '../../Config/Function/function'

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar dark expand="md" style={{ backgroundColor: "#00a680", flexWrap: 'nowrap' }} >
          <MDBNavbarBrand >
            <strong className="white-text"><img src={Logo} alt='Logo' style={{ maxWidth: "10%", minWidth: '100px' }} /></strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >
            <MDBNavbarNav >
          

              <MDBNavItem onClick={()=>this.props.path.push('/userprofile')} >
                <MDBNavLink to="/userprofile" >{this.props.nav}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem onClick={()=>this.props.path.push('/home')} >
                <MDBNavLink to="/home" >{this.props.home}</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink onClick={()=>signout(this.props.path)}>Logout</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>

        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;