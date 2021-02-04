import React from "react"
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"
import { selectDarkMode } from "./pageSlice";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./common/Header";
import ListSection from "./common/ListSection";
import Portfolio from "./common/Portfolio";
import { skillset } from "./skills";


function App() {

  const darkMode = useSelector(selectDarkMode);
  const array = ["Teamwork", "2", "3", "4"];

  return (
    <ThemeProvider
      theme={darkMode ? dark : light}
    >
      <GlobalStyle />
      <Container>
        <Header />
        <ListSection
          title="My skillset inculdes"
          list={skillset}
        />
        <ListSection
          title="What I want to lern"
          list={array}
        />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;