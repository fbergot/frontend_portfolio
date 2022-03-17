import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Project from "./pages/project";

const rootElement = document.getElementById("root");

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="*" element={<Home />} />
         </Routes>
      </Router>
   </React.StrictMode>,
   rootElement
);
