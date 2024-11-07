import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

// Homepage Components
import Hero from "./components/ui/Hero";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Testimonials from "./components/ui/Testimonials";
import ContactSection from "./components/ui/ContactSection";

const HomePage = () => (
  <>
    <Hero />
    <FeaturedProducts />
    <Testimonials />
    <ContactSection />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
