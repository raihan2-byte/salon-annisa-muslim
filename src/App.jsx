import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Location from "./pages/Location";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lokasi" element={<Location />} />
          <Route path="/tentangKami" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
