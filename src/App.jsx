import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Drag_Drop from "./components/Drag_Drop";
import Upload from "./components/Upload";
import Report from "./components/Report";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-fit">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/drag-drop" element={<Drag_Drop />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;