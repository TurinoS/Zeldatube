import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function Rotas() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <h1>Hello, World!</h1>
      </BrowserRouter>
    </main>
  );
}

export default Rotas;
