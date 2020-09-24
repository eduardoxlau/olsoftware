import styled from "styled-components";
import {
  color,
  background,
  layout,
  border,
  position,
  shadow,
} from "styled-system";
import { Card as uiCard } from "react-bootstrap";

export const Card = styled(uiCard)`
  ${position}
  ${border}
  ${layout}
  ${color}
  ${shadow}
  ${background}
`;
