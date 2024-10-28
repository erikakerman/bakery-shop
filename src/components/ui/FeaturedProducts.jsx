import chocolateCupcake from "../../assets/images/chocolateCupcake.jpg";
import weddingCake from "../../assets/images/weddingCake.jpg";
import strawberryCupcake from "../../assets/images/strawberryCupcake.jpg";

const FeaturedProducts = () => {
  // Sample featured products data with actual images
  const featuredProducts = [
    {
      id: 1,
      name: "Chocolate Dream Cupcake",
      category: "Cupcakes",
      price: "$4.99",
      imageUrl: chocolateCupcake,
    },
    {
      id: 2,
      name: "Vanilla Bliss Wedding Cake",
      category: "Wedding Cakes",
      price: "$299.99",
      imageUrl: weddingCake,
    },
    {
      id: 3,
      name: "Strawberry Delight Cupcake",
      category: "Cupcakes",
      price: "$4.99",
      imageUrl: strawberryCupcake,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#E4126B" }}>
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular treats, handcrafted with love and premium
            ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden 
                       transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button
                    className="px-4 py-2 text-white rounded-md text-sm"
                    style={{ backgroundColor: "#E4126B" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 text-white rounded-md inline-flex items-center"
            style={{ backgroundColor: "#E4126B" }}
          >
            View All Products
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
