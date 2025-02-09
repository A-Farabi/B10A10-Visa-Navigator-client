import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const MyAddedVisa = () => {
  const [addedVisas, setAddedVisas] = useState([]);
  const [editingVisa, setEditingVisa] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/Visa?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAddedVisas(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Visa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Visa entry has been removed.", "success");
              setAddedVisas(addedVisas.filter((visa) => visa._id !== id));
            }
          });
      }
    });
  };

  const handleUpdateClick = (visa) => {
    setEditingVisa(visa);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedVisa = {
      country: e.target.country.value,
      visa_type: e.target.visa_type.value,
      processing_time: e.target.processing_time.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      application_method: e.target.application_method.value,
    };

    fetch(`http://localhost:5000/Visa/${editingVisa._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Visa details updated.", "success");
          setAddedVisas(
            addedVisas.map((visa) =>
              visa._id === editingVisa._id ? { ...visa, ...updatedVisa } : visa
            )
          );
          setEditingVisa(null);
        }
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">My Added Visas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {addedVisas.map((visa) => (
          <div key={visa._id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold">{visa.country}</h2>
            <p><strong>Visa Type:</strong> {visa.visa_type}</p>
            <p><strong>Processing Time:</strong> {visa.processing_time} days</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <p><strong>Validity:</strong> {visa.validity}</p>
            <p><strong>Application Method:</strong> {visa.application_method}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleUpdateClick(visa)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(visa._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-3">Update Visa Information</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input name="country" defaultValue={editingVisa.country} placeholder="Country" required />
                <input name="visa_type" defaultValue={editingVisa.visa_type} placeholder="Visa Type" required />
                <input
                  name="processing_time"
                  defaultValue={editingVisa.processing_time}
                  placeholder="Processing Time (days)"
                  required
                />
                <input name="fee" defaultValue={editingVisa.fee} placeholder="Fee ($)" required />
                <input name="validity" defaultValue={editingVisa.validity} placeholder="Validity" required />
                <input
                  name="application_method"
                  defaultValue={editingVisa.application_method}
                  placeholder="Application Method"
                  required
                />
              </div>
              <div className="mt-3 flex gap-2">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditingVisa(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisa;
