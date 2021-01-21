import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"
import Container from "./common/Container";
import Header from "./common/Header";

function App() {
  return (
    <ThemeProvider
      theme={light}
    >
      <GlobalStyle />
      <Container>
        <Header>

        </Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
