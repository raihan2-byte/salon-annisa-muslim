import Blog from "./pages/Blog";
import BlogDashboard from "./pages/Dashboard/Blog";
import Home from "./pages/Home";
import Location from "./pages/Location";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DashboardIndex from "./pages/Dashboard/Index";
import LayananDashboard from "./pages/Dashboard/Layanan";
import { PrivateRoute } from "./middleware/PrivateRoute";
import Auth from "./pages/Dashboard/Auth";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <section>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lokasi" element={<Location />} />
          <Route path="/tentangKami" element={<AboutUs />} />
          <Route path="/dashboard/auth" element={<Auth />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<DashboardIndex />} />
            <Route path="layanan" element={<LayananDashboard />} />
            <Route path="blog" element={<BlogDashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
