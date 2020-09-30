import React from "react";
import styled, { css } from "styled-components";
import { Nav as UINav } from "react-bootstrap";

const Nav = ({ className, children }) => {
  return (
    <UINav className={`col-md-12 d-none d-md-block ${className}`}>
      {children}
    </UINav>
  );
};

export const Sidebar = styled(Nav)`
  overflow: hidden;
  width: 250px;
  transition: 0.2s;
  min-height: 100vh !important;
  z-index: 100;
  padding: 10px;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.hide &&
    css`
      width: 70px;
    `}
`;
