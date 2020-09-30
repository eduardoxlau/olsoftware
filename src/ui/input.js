/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Field } from "redux-form";
import { Form } from "react-bootstrap";

const InputDefault = (props) => {
  const { input, meta, type, placeholder, min, max } = props;
  const { valid } = meta;

  return (
    <Form.Control
      style={{ borderColor: valid ? null : "red" }}
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

export const Input = (props) => (
  <Field component={InputDefault} name="myField" {...props} />
);
