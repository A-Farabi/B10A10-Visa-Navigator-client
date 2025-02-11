import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const VisaDetail = () => {
    const visa = useLoaderData();
    const { user } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle form submission
    const handleApply = (e) => {
        e.preventDefault();
        const applyFormData = {
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            appliedDate: format(new Date(), "yyyy-MM-dd"),
            fee: visa.fee,
        };
        console.log("Application Submitted:", applyFormData);

        fetch('https://b10-a10-visa-navigator-server-3f6gc3175-a-farabis-projects.vercel.app/appliedVisa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applyFormData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Visa Applied Successfully",
                        icon: "success",
                        draggable: true,
                    });
                    e.target.reset();
                }
            })
            .catch(error => console.error("Error applying for visa:", error));

        setIsModalOpen(false);
        // Here you can send applyFormData to your server via a POST request
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{visa.countryName} Visa Details</h1>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime} days</p>
            <p>Fee: {visa.fee} BDT</p>
            <p>Validity: {visa.validity} days</p>
            <p>Description: {visa.description}</p>

            {/* Apply Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-5 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
                Apply for Visa
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Apply for Visa</h2>
                        <form onSubmit={handleApply}>
                            <div className="mb-3">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user.email} // Replace with logged-in user's email
                                    readOnly
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-3">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Applied Date:</label>
                                <input
                                    type="text"
                                    value={format(new Date(), "yyyy-MM-dd")}
                                    readOnly
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Fee:</label>
                                <input
                                    type="text"
                                    value={`${visa.fee} BDT`}
                                    readOnly
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Apply
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="ml-3 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisaDetail;
