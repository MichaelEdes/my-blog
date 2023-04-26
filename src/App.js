import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Topics from "./pages/Topics/Topics";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
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
