import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = (props) => {
  return (
    <Fragment >
      <MDBBtn onClick={props.onclick}>{props.name}</MDBBtn>
    </Fragment>
  );
}

export default ButtonPage;