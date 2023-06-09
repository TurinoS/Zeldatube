import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "components/pages/Home";
import Videos from "components/pages/Videos";
import Images from "components/pages/Images";
import Favorites from "components/pages/Favorites";
import Post from "components/pages/Post";

function Rotas() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/videos" Component={Videos} />
          <Route path="/images" Component={Images} />
          <Route path="/favorites" Component={Favorites} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default Rotas;
