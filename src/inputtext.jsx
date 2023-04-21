import React, { Component } from "react";
import ToolTip from "./ToolTip";
class InputText extends Component {
  validateKeys = Object.keys(this.props.validations);
  RequireObjectsGenrate = () => {
    const { validations } = this.props;
    let required = {};
    //console.log("validate,validationkey",this.validateKeys , validations);
    required = { ...validations };
    console.log("required", required);
    return required;
  };

  errorRender = (name) => {
    const { validations } = this.props;
    const { errors } = this.props;
    let error;
    this.validateKeys.forEach((vkey) => {
      if (errors[name]?.type === vkey && validations[vkey].value) {
        error = (
          <div className="alert alert-danger mt-2">
            {validations[vkey].message}
          </div>
        );
      }
    });

    return error;
  };
  render() {
    const {
      label,
      name,
      placeholder,
      type,
      toolTip,
      register,
      isShow
    } = this.props;
    const test = this.RequireObjectsGenrate();

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          {...register(name, test)}
          type={type}
          className="form-control"
          placeholder={placeholder}
          id={name}
        />
        {isShow && (
          <div className="mytooltip">
            <p>{toolTip}</p>
          </div>
        )}

        {this.errorRender(name)}
      </div>
    );
  }
}

export default ToolTip(InputText);
