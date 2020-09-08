import React from "react";
import "./inputStyle.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Input = ({
  fieldName,
  type,
  handleChange,
  error,
  icon,
  changePasswordVisibility,
}) => {
  return (
    <div>
      <div className="inputField">
        <input
          type={type}
          className={error ? "inputValue error" : "inputValue"}
          name={fieldName}
          placeholder={`${fieldName} *`}
          onChange={handleChange}
        />
        {icon === "on" ? (
          <span className="iconContainer">
            <VisibilityIcon onClick={changePasswordVisibility} />
          </span>
        ) : icon === "off" ? (
          <span className="iconContainer">
            <VisibilityOffIcon onClick={changePasswordVisibility} />
          </span>
        ) : (
          ""
        )}
      </div>
      <p className="errorMessage">{error}</p>
    </div>
  );
};

export default Input;
