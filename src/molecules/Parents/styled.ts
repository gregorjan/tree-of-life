import styled from "styled-components";
import { Button } from "../../atoms";

export const ParentWrapper = styled.div`
  flex: 2 0 auto;
  display: flex;
  align-items: flex-start;

  position: relative;
`;

export const ParentButton = styled(Button)<{ index: number }>`
  margin-top: 32px;
  z-index: ${({ index }) => 10 + index};
  display: flex;
  flex-direction: column;
  align-items: center;
  top: calc(50% - 22px);
  padding: 16px;
`;
export const TimelinePoint = styled.div`
  margin-bottom: 8px;
  position: relative;
  background-color: black;
  height: 12px;
  width: 12px;
  border-radius: 50%;

  ::after {
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    content: "";
    position: absolute;
    background-color: white;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
`;

export const ParentLine = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  border-top: 2px solid white;
  width: 100%;
`;
