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
import MixtapeSingle from "./Components/Pages/MixtapeSingle";
import TabContent1 from "./Components/Pages/TabContent1";
import TabContent2 from "./Components/Pages/TabContent2";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Fundraise from "./Components/Pages/Fundraise";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookiePolicy from "./Components/Pages/CookiePolicy";
import Termsofuse from "./Components/Pages/Termsofuse";
import DmcaNotice from "./Components/Pages/DmcaNotice";
import Event from "./Components/Pages/Event";
import EventOverview from "./Components/Pages/EventOverview";
import EventHowToApply from "./Components/Pages/EventHowToApply";
import EventTheProcess from "./Components/Pages/EventTheProcess";
import AllEvent from "./Components/Pages/AllEvent";
import Profile from "./Components/Dashboard/Profile";
import SingleBlog from "./Components/Pages/SingleBlog";
import YouTubeVideoVote from "./Components/Pages/YouTubeVideoVote";
import Success from "./Components/Pages/Success";
import ScrollToTop from "./Components/Shear/ScrollToTop";

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
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route ignoreScrollBehavior path="/news" element={<NewsPages />} />
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
            <Route path="/success" element={<Success />} />
            <Route path="/pop-up-shop" element={<Fundraise />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="/termsofuse" element={<Termsofuse />} />
            <Route path="/community" element={<Termsofuse />} />
            <Route path="/single_blog" element={<SingleBlog />} />
            <Route path="/poll/youtube-video/" element={<YouTubeVideoVote />} />
            <Route path="/dmca-notice" element={<DmcaNotice />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/events" element={<AllEvent />} />
            <Route path="/event/:id" element={<Event />}>
              <Route path="/event/:id" element={<EventOverview />} />
              <Route
                path="/event/:id/how-to-apply"
                element={<EventHowToApply />}
              />
              <Route
                path="/event/:id/the-process"
                element={<EventTheProcess />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
