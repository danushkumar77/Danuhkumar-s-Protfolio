import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import BlogDetail from "./pages/BlogDetail";
import Resume from "./pages/Resume";
import PageLoader from "./components/PageLoader";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

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
    <>
      {loading ? (
        <PageLoader onComplete={() => setLoading(false)} />
      ) : (
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
      )}
    </>
  );
}

export default App;
