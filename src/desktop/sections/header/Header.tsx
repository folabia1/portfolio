import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 6.4rem;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  .header-right {
    justify-self: end;
    display: flex;
    gap: 1.6rem;

    .buttons {
      display: flex;
      gap: 0.8rem;
    }
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <div className="header-logo">Logo</div>

      <div className="header-center">
        <button>Home</button>
        <input />
      </div>

      <div className="header-right">
        <button>Download CV</button>

        <div className="buttons">
          <button>{"What's New"}</button>
          <button>Friend Activity</button>
        </div>

        <button>Profile Pic</button>
      </div>
    </StyledHeader>
  );
}
