import styled from "styled-components";
import {
  color,
  background,
  layout,
  border,
  position,
  shadow,
  space,
} from "styled-system";
import { Card as uiCard } from "react-bootstrap";

export const Card = styled(uiCard)`
  ${space}
  ${position}
  ${border}
  ${layout}
  ${color}
  ${shadow}
  ${background}
`;
