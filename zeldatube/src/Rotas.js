import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "components/pages/Home";

function Rotas() {
  return (
      <BrowserRouter>
        <Header />

        <Home />
        
        <Footer />
      </BrowserRouter>
  );
}

export default Rotas;
