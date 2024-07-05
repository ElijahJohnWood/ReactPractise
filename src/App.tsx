import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
