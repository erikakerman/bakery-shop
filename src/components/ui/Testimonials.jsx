const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The wedding cake was absolutely stunning! Not only did it look beautiful, but it tasted amazing. All our guests were impressed!",
      role: "Wedding Customer",
    },
    {
      id: 2,
      name: "Michael Brown",
      text: "These are the best cupcakes I've ever had! The chocolate ones are my absolute favorite. Perfect for any occasion.",
      role: "Regular Customer",
    },
    {
      id: 3,
      name: "Emma Davis",
      text: "Sweet Delights made my daughter's birthday extra special with their custom cupcakes. The attention to detail was incredible!",
      role: "Birthday Party",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#E4126B" }}>
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our valued customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-4">{testimonial.text}</p>

              {/* Customer Info */}
              <div className="mt-auto">
                <p className="font-semibold" style={{ color: "#E4126B" }}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
