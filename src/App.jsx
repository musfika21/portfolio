import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;