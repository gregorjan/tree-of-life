import styled from "styled-components";
import { Button } from "../../atoms";
import { colors, shadows } from "../../styles";

export const Wrapper = styled.ul`
  list-style-type: none;
`;

export const ChildrenButton = styled(Button)`
  margin: 8px 0;
  background-color: ${colors.primaryBackground};
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${shadows.normal};
`;
