import React from "react";
import styled from "styled-components";

const StyledDragHandler = styled.div`
  width: 2px;
  height: 100%;
  background-color: white;
  opacity: 0%;
  margin-block: 1.2rem;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    opacity: 0.2;
  }
`;

export function DragHandler() {
  return <StyledDragHandler />;
}
