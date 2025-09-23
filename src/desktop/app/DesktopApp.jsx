import styled from "styled-components";
import { Footer } from "../sections/footer/Footer";
import { Header } from "../sections/header/Header";
import { MainArea } from "../sections/maIn-area/MainArea";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export function DesktopApp() {
  return (
    <StyledApp>
      <Header />
      <MainArea />
      <Footer />
    </StyledApp>
  );
}
