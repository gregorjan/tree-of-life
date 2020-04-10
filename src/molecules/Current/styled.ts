import styled from "styled-components";
import { colors, shadows } from "../../styles";

export const CurrentWrapper = styled.div`
  background-color: ${colors.primaryBackground};
  padding: 8px;
  border-radius: 4px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${shadows.long};
`;

export const Description = styled.div`
  text-align: center;
`;
