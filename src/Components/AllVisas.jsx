import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllVisas = () => {
  const visas = useLoaderData();

//   const {_id, countryImage, countryName, VisaType, processingTime} = visas

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center my-5">All Visas</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas?.map((visa) => (
          <div
            key={visa?._id}
            className="border p-4 rounded-2xl shadow-md bg-white"
          >
            <img
              src={visa?.countryImage}
              alt={visa?.countryName}
              className="h-40 w-full object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">
              {visa?.countryName} ({visa?.visaType})
            </h2>
            <p>Processing Time: {visa?.processingTime} days</p>
            <p>Fee: {visa?.fee} BDT</p>
            <p>Age Restriction: {visa?.ageRestriction}+</p>
            <Link
              to={`/visadetail/${visa?._id}`}
              className="inline-block mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllVisas;
