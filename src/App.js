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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {" "}
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
