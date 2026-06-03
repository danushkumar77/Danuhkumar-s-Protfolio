import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import BlogDetail from "./pages/BlogDetail";
import Resume from "./pages/Resume";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/certificates" element={<Portfolio />} />
        <Route path="/blog" element={<Portfolio />} />
        <Route path="/contact" element={<Portfolio />} />
        <Route path="/cv" element={<Portfolio />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Layout>
  );
}

export default App;
