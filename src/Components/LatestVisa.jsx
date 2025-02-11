import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data for visas
    fetch("https://b10-a10-visa-navigator-server-3f6gc3175-a-farabis-projects.vercel.app/visa")
      .then((res) => res.json())
      .then((data) => {
        // Limit to the latest 6 visas
        const sortedVisas = data.slice(0, 6);
        setVisas(sortedVisas);
      })
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">Latest Visas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visas.map((visa) => (
          <div key={visa.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-40 object-cover rounded-t"
            />
            <h3 className="text-xl font-semibold mt-3">{visa.country}</h3>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime} days</p>
            <p>Fee: {visa.fee} BDT</p>
            <p>Validity: {visa.validity} days</p>
            <p>Application Method: {visa.applicationMethod}</p>
            <button
              className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => navigate(`/visadetail/${visa?._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>

      {/* See All Visas Button */}
      <div className="mt-8">
        <button
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
          onClick={() => navigate("/all-visas")}
        >
          See All Visas
        </button>
      </div>
    </div>
  );
};

export default LatestVisas;
