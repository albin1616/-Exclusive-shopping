import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const hideRoutes = ["/login", "/register"];

  return (
    <div>
      {!hideRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!hideRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
