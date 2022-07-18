import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Filmes from "./pages/Filmes";

const SystemRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />      
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<Filmes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default SystemRoutes;