import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getLPTheme from "./styles/getLPTheme";
import { CourseForm } from "./components/course/CourseForm";
import React from "react";

const App = () => {
  const LPtheme = createTheme(getLPTheme());

  return (
    <React.StrictMode>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <CourseForm />
      </ThemeProvider>
    </React.StrictMode>
  );
};
export default App;
