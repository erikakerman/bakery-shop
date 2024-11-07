import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product, type }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
        <span className="text-pink-600 font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <Link
        to={`/products/${type}/${product.id}`}
        className="block w-full px-4 py-2 text-white rounded-md transition-colors text-center"
        style={{ backgroundColor: "#E4126B" }}
      >
        View Details
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["cupcakes", "wedding-cakes"]).isRequired,
};

const ProductsPage = () => {
  const cupcakes = [
    {
      id: "classic-vanilla",
      title: "Classic Vanilla",
      price: 3.99,
      image: "/images/1.PNG",
      description:
        "Light and fluffy vanilla cupcake with creamy vanilla frosting",
    },
    {
      id: "chocolate-dream",
      title: "Chocolate Dream",
      price: 4.49,
      image: "/images/2.PNG",
      description: "Rich chocolate cupcake topped with chocolate buttercream",
    },
    {
      id: "strawberry-delight",
      title: "Strawberry Delight",
      price: 4.29,
      image: "/images/3.PNG",
      description:
        "Fresh strawberry cupcake with strawberry cream cheese frosting",
    },
    {
      id: "red-velvet",
      title: "Red Velvet",
      price: 4.49,
      image: "/images/4.PNG",
      description: "Classic red velvet with smooth cream cheese frosting",
    },
    {
      id: "lemon-burst",
      title: "Lemon Burst",
      price: 4.29,
      image: "/images/1.PNG",
      description: "Tangy lemon cupcake with lemon zest buttercream",
    },
    {
      id: "caramel-swirl",
      title: "Caramel Swirl",
      price: 4.69,
      image: "/images/2.PNG",
      description:
        "Vanilla cupcake with caramel filling and salted caramel frosting",
    },
    {
      id: "mint-chocolate",
      title: "Mint Chocolate",
      price: 4.49,
      image: "/images/3.PNG",
      description: "Chocolate cupcake with mint chocolate chip frosting",
    },
    {
      id: "raspberry-white-chocolate",
      title: "Raspberry White Chocolate",
      price: 4.69,
      image: "/images/4.PNG",
      description: "White chocolate cupcake with fresh raspberry buttercream",
    },
  ];

  const weddingCakes = [
    {
      id: "classic-elegance",
      title: "Classic Elegance",
      price: 449.99,
      image: "/images/5.PNG",
      description: "Three-tier white wedding cake with delicate floral details",
    },
    {
      id: "rose-garden",
      title: "Rose Garden",
      price: 499.99,
      image: "/images/6.PNG",
      description: "Four-tier cake adorned with cascading sugar roses",
    },
    {
      id: "modern-geometric",
      title: "Modern Geometric",
      price: 479.99,
      image: "/images/7.PNG",
      description:
        "Contemporary design with geometric patterns and metallic accents",
    },
    {
      id: "rustic-charm",
      title: "Rustic Charm",
      price: 399.99,
      image: "/images/8.PNG",
      description: "Semi-naked cake with fresh flowers and rustic finish",
    },
    {
      id: "luxury-gold",
      title: "Luxury Gold",
      price: 599.99,
      image: "/images/9.PNG",
      description: "Elegant white and gold cake with hand-painted details",
    },
    {
      id: "vintage-lace",
      title: "Vintage Lace",
      price: 529.99,
      image: "/images/5.PNG",
      description: "Three-tier cake with edible lace and pearl details",
    },
    {
      id: "garden-romance",
      title: "Garden Romance",
      price: 549.99,
      image: "/images/6.PNG",
      description: "Floral-themed cake with hand-piped buttercream flowers",
    },
    {
      id: "modern-minimalist",
      title: "Modern Minimalist",
      price: 449.99,
      image: "/images/7.PNG",
      description: "Clean, contemporary design with subtle textures",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Cupcakes Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#E4126B" }}
            >
              Cupcakes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delightful individual treats perfect for any occasion. Each
              cupcake is handcrafted with premium ingredients and topped with
              our signature frosting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cupcakes.map((cupcake) => (
              <ProductCard key={cupcake.id} product={cupcake} type="cupcakes" />
            ))}
          </div>
        </section>

        {/* Wedding Cakes Section */}
        <section>
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#E4126B" }}
            >
              Wedding Cakes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stunning centerpieces for your special day. Each wedding cake is
              custom-designed to match your vision and crafted with meticulous
              attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingCakes.map((cake) => (
              <ProductCard key={cake.id} product={cake} type="wedding-cakes" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
