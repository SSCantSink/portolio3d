import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

export function App() {
    return (
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Router>
        </main>
    );
}