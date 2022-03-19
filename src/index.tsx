import "./assets/scss/base/global.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Header from "./components/header/Header";
import Footer from "./components/footer";
import TermsOfUse from "./pages/termsOfUse";

const rootElement = document.getElementById("root");

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="termsOrUse" element={<TermsOfUse />} />
            <Route path="*" element={<AboutMe />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>,
   rootElement
);
