import Header from "./components/layout/Header";
import Hero from "./components/ui/Hero";
import FeaturedProducts from "./components/ui/FeaturedProducts";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
