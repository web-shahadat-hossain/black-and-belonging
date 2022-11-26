import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Mixtapes from "./Components/Pages/Mixtapes";
import NewsPages from "./Components/Pages/NewsPages";
import NotFound from "./Components/Pages/NotFound";
import Footer from "./Components/Shear/Footer";
import Header from "./Components/Shear/Header";
import Loading from "./Components/Shear/Loading";
import MixtapeSingle from "./Components/Pages/MixtapeSingle";
import TabContent1 from "./Components/Pages/TabContent1";
import TabContent2 from "./Components/Pages/TabContent2";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Fundraise from "./Components/Pages/Fundraise";
import CookiePolicy from "./Components/Pages/CookiePolicy";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPages />} />
            <Route path="/mixtapes" element={<Mixtapes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mixtape-single" element={<MixtapeSingle />}>
              <Route path="/mixtape-single" element={<TabContent1 />} />
              <Route
                path="/mixtape-single/tracklist"
                element={<TabContent2 />}
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fundraise" element={<Fundraise />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
