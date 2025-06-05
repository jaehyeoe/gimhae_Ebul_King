import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";  // 필요하면 페이지 생성
// import Contact from "./pages/Contact.jsx"; // Contact 페이지 만들면 import

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} />  Contact 페이지 만들면 활성화 */}
    </Routes>
  </HashRouter>
);




