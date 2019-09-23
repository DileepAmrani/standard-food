import React from "react";

const InputPage = (props) => {
  return (
    <div className="input-group" style={{marginBottom: '5px'}}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon" >
          <i className={props.icon}></i>
        </span>
      </div >
      <input type={props.type} onChange={props.onChange}  className="form-control" placeholder={props.name} aria-label={props.name}  aria-describedby="basic-addon" />
    </div>
  );
}

export default InputPage;