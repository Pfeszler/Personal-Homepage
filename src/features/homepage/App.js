import React from "react"
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"
import Container from "./common/Container";
import Header from "./common/Header";
import { selectDarkMode } from "./pageSlice";

function App() {

  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider
      theme={darkMode ? dark : light}
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