import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category } = useParams();

  // Sample product data - in a real app, this would come from your JSON file or API
  const products = {
    cupcakes: [
      {
        id: "classic-chocolate",
        title: "Classic Chocolate",
        price: 4.99,
        image: "/api/placeholder/400/400",
        description:
          "Rich chocolate cake topped with smooth chocolate buttercream",
        allergens: ["milk", "eggs", "wheat"],
        sizes: ["regular", "mini"],
      },
      // Add more cupcake products here
    ],
    "wedding-cakes": [
      {
        id: "elegant-white",
        title: "Elegant White",
        price: 299.99,
        image: "/api/placeholder/400/400",
        description:
          "Three-tier white wedding cake with delicate floral details",
        allergens: ["milk", "eggs", "wheat"],
        sizes: ["2 tier", "3 tier", "4 tier"],
      },
      // Add more wedding cake products here
    ],
  };

  const categoryTitle = category === "cupcakes" ? "Cupcakes" : "Wedding Cakes";
  const categoryProducts = products[category] || [];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#E4126B" }}>
            {categoryTitle}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {category === "cupcakes"
              ? "Indulge in our delicious selection of handcrafted cupcakes"
              : "Create unforgettable memories with our stunning wedding cakes"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Product Details */}
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Sizes: </span>
                    {product.sizes.join(", ")}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Allergens: </span>
                    {product.allergens.join(", ")}
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <span
                    className="text-xl font-bold"
                    style={{ color: "#E4126B" }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    className="px-4 py-2 text-white rounded-md"
                    style={{ backgroundColor: "#E4126B" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
