import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Topics from "./pages/Topics/Topics";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Blog/:blogId" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
