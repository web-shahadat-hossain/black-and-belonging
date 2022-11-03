import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Mixtapes from "./Components/Pages/Mixtapes";
import NewsPages from "./Components/Pages/NewsPages";
import NotFound from "./Components/Pages/NotFound";
import Footer from "./Components/Shear/Footer";
import Header from "./Components/Shear/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/mixtapes" element={<Mixtapes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
