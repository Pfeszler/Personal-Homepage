import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"
import Container from "./common/Container/Container";

function App() {
  return (
    <ThemeProvider
      theme={light}
    >
      <GlobalStyle />
      <Container>

      </Container>
    </ThemeProvider>
  );
}

export default App;
