import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-inline: 0.8rem;

  h1 {
    text-align: end;
  }
`;

export function App() {
  return (
    <StyledApp>
      <h1>Folabi Ayonrinde</h1>
      <p className="subtitle">Full-stack developer.</p>
    </StyledApp>
  );
}
