import { Route, Router, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Home from "./component/Home";


import Navbar from "./component/Navbar";

import NotFound from "./component/NotFound/NotFound";
import OurWorks from "./component/OurWorks";
import ServicePage from "./component/ServicePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<OurWorks />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
