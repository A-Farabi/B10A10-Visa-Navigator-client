import React from "react";

const AddVisa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    const formElements = e.target.elements;

    for (let element of formElements) {
      if (element.name) {
        // Handle checkboxes
        if (element.type === "checkbox") {
          if (!formData[element.name]) formData[element.name] = [];
          if (element.checked) formData[element.name].push(element.value);
        } else {
          formData[element.name] = element.value.trim();
        }

        // Check for required fields
        if (!element.value.trim() && element.required) {
          alert(`Please fill in the ${element.name} field.`);
          return;
        }
      }
    }

    console.log("Visa Details Submitted:", formData);
    alert("Visa added successfully!");
    
    // Reset the form after successful submission
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto p-8 shadow-md bg-white rounded-xl">
        <h1 className="text-3xl font-semibold mb-6 text-center">Add Visa Information</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country Image */}
          <div>
            <label className="block font-medium mb-2">Country Image (Image URL)</label>
            <input
              type="text"
              name="countryImage"
              placeholder="Enter image URL"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Country Name */}
          <div>
            <label className="block font-medium mb-2">Country Name</label>
            <input
              type="text"
              name="countryName"
              placeholder="Enter country name"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Visa Type */}
          <div>
            <label className="block font-medium mb-2">Visa Type</label>
            <select
              name="visaType"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="">Select a visa type</option>
              <option value="Tourist visa">Tourist Visa</option>
              <option value="Student visa">Student Visa</option>
              <option value="Official visa">Official Visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div>
            <label className="block font-medium mb-2">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              placeholder="e.g., 10-15 business days"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Required Documents */}
          <div>
            <label className="block font-medium mb-2">Required Documents</label>
            <div className="space-y-2">
              {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
                (doc) => (
                  <div key={doc} className="flex items-center">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value={doc}
                      className="mr-2"
                    />
                    <label>{doc}</label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter description of the visa"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            ></textarea>
          </div>

          {/* Age Restriction */}
          <div>
            <label className="block font-medium mb-2">Age Restriction</label>
            <input
              type="number"
              name="ageRestriction"
              placeholder="Enter age limit if applicable"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Fee */}
          <div>
            <label className="block font-medium mb-2">Fee</label>
            <input
              type="number"
              name="fee"
              placeholder="Enter visa fee"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Validity */}
          <div>
            <label className="block font-medium mb-2">Validity</label>
            <input
              type="text"
              name="validity"
              placeholder="Enter validity duration"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Application Method */}
          <div>
            <label className="block font-medium mb-2">Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              placeholder="e.g., Apply online or visit embassy"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 mt-4 rounded-md"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
