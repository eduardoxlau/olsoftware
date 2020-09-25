/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { typography, space } from "styled-system";
import { Button as UIButton } from "react-bootstrap";

const button = (props) => {
  const { children } = props;
  return <UIButton {...props}>{children}</UIButton>;
};

const field = (props) => <Field component={button} {...props} />;

export const Button = styled(field)`
  ${typography}
  ${space}
`;
