import React from "react";
import styled from "styled-components";
import { ActiveListening } from "./ActiveListening";
import { FooterActions } from "./FooterActions";
import { Player } from "./Player";

const StyledFooter = styled.div`
  display: grid;
  padding: 1.2rem 0.8rem;
  grid-template-columns: 1fr auto 1fr;
`;

export function Footer() {
  return (
    <StyledFooter>
      <ActiveListening />
      <Player />
      <FooterActions />
    </StyledFooter>
  );
}
