import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const MyVisaApplication = () => {
  const allApplications = useLoaderData();
  const [userApplications, setUserApplications] = useState([]);
  const { user } = useContext(AuthContext); // Logged-in user's info

  useEffect(() => {
    // Filter applications based on logged-in user's email
    const filteredApplications = allApplications.filter(
      (application) => application.email === user?.email
    );
    setUserApplications(filteredApplications);
  }, [allApplications, user]);

  const handleCancelApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this application!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-visa-navigator-server-3f6gc3175-a-farabis-projects.vercel.app/appliedVisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your application has been canceled.", "success");
              setUserApplications(userApplications.filter((app) => app._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">My Visa Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {userApplications.length > 0 ? (
          userApplications.map((visa) => (
            <div key={visa._id} className="border p-4 rounded-lg shadow-lg bg-white">
              <img src={visa.countryImage} alt={visa.country} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h2 className="text-xl font-semibold">{visa.country}</h2>
              <p><strong>Visa Type:</strong> {visa.visa_type}</p>
              <p><strong>Processing Time:</strong> {visa.processing_time} days</p>
              <p><strong>Fee:</strong> ${visa.fee}</p>
              <p><strong>Validity:</strong> {visa.validity}</p>
              <p><strong>Application Method:</strong> {visa.application_method}</p>
              <p><strong>Applied Date:</strong> {new Date(visa.applied_date).toLocaleDateString()}</p>
              <p><strong>Applicant Name:</strong> {`${visa.firstName} ${visa.lastName}`}</p>
              <p><strong>Email:</strong> {visa.email}</p>
              <button
                onClick={() => handleCancelApplication(visa._id)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p>No visa applications found.</p>
        )}
      </div>
    </div>
  );
};

export default MyVisaApplication;
