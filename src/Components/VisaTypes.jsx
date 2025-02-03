import React from "react";

const VisaTypes = () => {
  const visaTypes = [
    { title: "Student Visa", description: "For students seeking education abroad." },
    { title: "Work Permit", description: "For professionals pursuing employment overseas." },
    { title: "Tourist Visa", description: "For travelers exploring destinations around the world." },
    { title: "Business Visa", description: "For business professionals attending meetings and events." },
    { title: "Family Visa", description: "For individuals visiting family members abroad." },
    { title: "Transit Visa", description: "For short layovers or transit through foreign countries." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Types of Visas We Provide
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the visa type that suits your purpose of travel. We provide assistance for a wide range of visa categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                {visa.title}
              </h3>
              <p className="text-gray-700">{visa.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaTypes;
