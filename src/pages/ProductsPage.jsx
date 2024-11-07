import { Link } from "react-router-dom";

const ProductsPage = () => {
  const categories = [
    {
      id: "cupcakes",
      title: "Cupcakes",
      description: "Delightful individual treats perfect for any occasion",
      image: "/images/1.PNG", // Using absolute path from public folder
      count: "12 varieties",
    },
    {
      id: "wedding-cakes",
      title: "Wedding Cakes",
      description: "Stunning centerpieces for your special day",
      image: "/images/5.PNG", // Using absolute path from public folder
      count: "8 designs",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8" style={{ color: "#E4126B" }}>
        Our Products
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold">{category.title}</h2>
            <p>{category.description}</p>
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover mt-4"
            />
            <p className="mt-2 text-gray-600">{category.count}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
