import styled from "styled-components";
import {
  color,
  background,
  layout,
  border,
  space,
  position,
  flexbox,
} from "styled-system";

export const Container = styled.div`
  ${flexbox}
  ${border}
  ${layout}
  ${color}
  ${background}
  ${space}
  ${position}
`;
