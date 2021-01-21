import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../GlobalStyle";
import { light, dark } from "../../themes"

function App() {
  return (
    <ThemeProvider
      theme={light}
    >
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
