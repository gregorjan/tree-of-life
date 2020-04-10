import styled from "styled-components";
import { colors, shadows } from "../../styles";
import { Button } from "../../atoms";

const getScale = (length: number, index: number, min: number, max: number) => {
  return min + (max - min) * (index / (length - 1));
};

export const ParentWrapper = styled.div`
  flex: 2 0;
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content: flex-end;
`;

export const ParentButton = styled(Button)<{
  index: number;
  length: number;
}>`
  text-shadow: ${shadows.normal};
  z-index: ${({ index }) => 10 + index};
  display: flex;
  flex-direction: column;
  align-items: center;
  top: calc(50% - 22px);
  left: 0;
  padding: 16px;
  opacity: ${({ index, length }) => getScale(length, index, 0.3, 1)};
  transform: ${({ index, length }) =>
    `scale(${getScale(length, index, 0.4, 1)}) `};
  transform-origin: 50% 22px;
`;

export const TimelinePoint = styled.div`
  margin-bottom: 8px;
  position: relative;
  background-color: ${colors.background};
  height: 12px;
  width: 12px;
  border-radius: 50%;

  ::after {
    box-shadow: ${shadows.normal};
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    content: "";
    position: absolute;
    background-color: ${colors.secondary};
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
`;
