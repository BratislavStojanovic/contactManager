import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  Label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{Label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="innvalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text"
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Label: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInputGroup;
