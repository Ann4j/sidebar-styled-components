import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Sidebar, SidebarProvider } from "./components/Sidebar";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeButton } from "./components/ThemeButton";

library.add(fas);

const App = () => {
  const [themeName, setThemeName] = useState("light");
  const theme = themeName === "light" ? lightTheme : darkTheme;
  const toggleTheme = () => {
    const next = themeName === "light" ? "dark" : "light";
    setThemeName(next);
  };

  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Sidebar color={themeName} />
        <ThemeButton themeName={themeName} onClick={toggleTheme} />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
