import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
