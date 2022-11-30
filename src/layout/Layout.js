import { Routes, Route } from "react-router-dom";
//import Banner from "../components/Banner/Banner";
import About from "../pages/About/About";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Page404 from "../pages/Page404/Page404";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="page404" element={<Page404 />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
