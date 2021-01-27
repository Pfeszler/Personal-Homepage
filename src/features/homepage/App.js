import React from "react"
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"
import Container from "./common/Container";
import Header from "./common/Header";
import ListSection from "./common/ListSection";
import { selectDarkMode } from "./pageSlice";

function App() {

  const darkMode = useSelector(selectDarkMode);
  const array = ["Teamwork", "2", "3", "4"]

  return (
    <ThemeProvider
      theme={darkMode ? dark : light}
    >
      <GlobalStyle />
      <Container>
        <Header />
        <ListSection
          title="My skillset inculdes"
          list={array}
        />
        <ListSection
          title="What I want to lern"
          list={array}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;