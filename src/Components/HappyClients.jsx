import React from "react";

const HappyClients = () => {
  const testimonials = [
    {
      name: "Sarah Hadid",
      feedback: "Visa Navigator made my student visa application process so easy. I couldn't be happier!",
      role: "Student, USA",
    },
    {
      name: "Samiya Rahman",
      feedback: "I got my work permit approved faster than expected. Highly recommended!",
      role: "Engineer, Germany",
    },
    {
      name: "Minha Begum",
      feedback: "Excellent service! The tracking feature kept me updated at every step.",
      role: "Tourist, Australia",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-100 to-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Happy Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We take pride in helping our clients achieve their travel dreams with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="italic text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold text-purple-600">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
