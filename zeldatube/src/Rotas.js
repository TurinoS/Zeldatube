import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "Footer";

function Rotas() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <h1>Hello, World!</h1>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default Rotas;
