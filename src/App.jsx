import Navbar from "./components/navbar/Navbar"
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Presentation from "./pages/presentation/Presentation";
import Pictures from "./pages/pictures/Pictures";
import Showreel from "./pages/showreel/Showreel";
import CV from "./pages/cv/CV";
import { useEffect } from "react";

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/pictures" element={<Pictures />} />
                <Route path="/showreel" element={<Showreel />} />
                <Route path="/cv" element={<CV />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
