import Header from "./components/layout/Header";
import Hero from "./components/ui/Hero";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Testimonials from "./components/ui/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
