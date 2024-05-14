import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import getLPTheme from "./styles/getLPTheme";
import { CourseForm } from "./components/course/CourseForm";

const App = () => {
  const LPtheme = createTheme(getLPTheme());
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <CourseForm />
    </ThemeProvider>
  );
};
export default App;
