import Blog from "./pages/Blog";
import BlogDashboard from "./pages/Dashboard/Blog";
import Home from "./pages/Home";
import Location from "./pages/Location";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DashboardIndex from "./pages/Dashboard/Index";
import LayananDashboard from "./pages/Dashboard/Layanan";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lokasi" element={<Location />} />
          <Route path="/tentangKami" element={<AboutUs />} />
          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="/dashboard/layanan" element={<LayananDashboard />} />
          <Route path="/dashboard/blog" element={<BlogDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
