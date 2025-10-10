import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { NowPlaying } from "../NowPlaying";
import { Library } from "../library/Library";
import { DragHandler } from "./DragHandler";

const StyledMainArea = styled.div`
  height: 100%;
  display: flex;
  gap: 0.4rem;
  display: grid;
  padding-inline: 0.8rem;
  grid-template-columns: auto auto 1fr auto auto;
`;

export function MainArea() {
  return (
    <StyledMainArea>
      <Library />
      <DragHandler />
      <Outlet />
      <DragHandler />
      <NowPlaying />
    </StyledMainArea>
  );
}
