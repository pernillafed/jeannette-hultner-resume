import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Presentation from "./pages/presentation/Presentation";
import Pictures from "./pages/pictures/Pictures";
import Showreel from "./pages/showreel/Showreel";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/pictures" element={<Pictures />} />
                <Route path="/showreel" element={<Showreel />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
