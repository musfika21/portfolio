import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
