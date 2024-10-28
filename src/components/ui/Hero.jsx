import heroImage from "../../assets/images/hero.jpg"; // Adjust the path as needed

const Hero = () => {
  return (
    <div className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#E4126B" }}
            >
              Welcome to Sweet Delights
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Discover our handcrafted cupcakes and stunning wedding cakes, made
              with love and the finest ingredients.
            </p>
            <button
              className="px-6 py-3 text-white rounded-md text-lg"
              style={{ backgroundColor: "#E4126B" }}
            >
              View Our Products
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative h-64 md:h-96">
            <img
              src={heroImage}
              alt="Delicious cupcakes and cakes"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
