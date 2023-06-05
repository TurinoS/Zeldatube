import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <h1>Hello, World!</h1>
      </BrowserRouter>
    </main>
  );
}

export default App;
