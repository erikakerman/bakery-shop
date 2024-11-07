const AboutPage = () => {
  const values = [
    {
      title: "Quality Ingredients",
      description:
        "We use only the finest, locally-sourced ingredients to ensure exceptional taste and quality.",
      icon: (
        <svg
          className="w-12 h-12 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Handcrafted with Love",
      description:
        "Every creation is handmade with attention to detail and genuine passion for baking.",
      icon: (
        <svg
          className="w-12 h-12 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our priority. We work closely with you to exceed your expectations.",
      icon: (
        <svg
          className="w-12 h-12 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl font-bold mb-6"
              style={{ color: "#E4126B" }}
            >
              Our Story
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sweet Delights began in 2015 with a simple passion for creating
              joy through delicious, handcrafted treats. What started as a small
              family bakery has grown into a beloved destination for cupcake
              enthusiasts and couples seeking their perfect wedding cake. Our
              commitment to quality, creativity, and customer satisfaction
              remains at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#E4126B" }}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#E4126B" }}>
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We would love to hear from you! Whether you have questions about our
            products or want to discuss a custom order, our team is here to
            help.
          </p>
          <button
            className="px-8 py-3 text-white rounded-md text-lg transition-transform duration-300 hover:-translate-y-1"
            style={{ backgroundColor: "#E4126B" }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
