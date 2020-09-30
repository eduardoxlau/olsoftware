import styled from "styled-components";
import {
  color,
  background,
  layout,
  border,
  position,
  shadow,
  space,
  flexbox,
} from "styled-system";
import { Card as uiCard } from "react-bootstrap";

export const Card = styled(uiCard)`
  ${flexbox}
  ${space}
  ${position}
  ${border}
  ${layout}
  ${color}
  ${shadow}
  ${background}
`;
