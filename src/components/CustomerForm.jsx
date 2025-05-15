import React from 'react';

const CustomerForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-6">New Customer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Customer Type */}
        <div className="col-span-2">
          <label className="block font-medium mb-2">Customer Type:</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Business
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" /> Individual
            </label>
          </div>
        </div>

        {/* Salutation */}
        <div>
          <label className="block font-medium mb-2">Salutation</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
          </select>
        </div>

        {/* First Name */}
        <div>
          <label className="block font-medium mb-2">First Name</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-medium mb-2">Last Name</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium mb-2">Company Name</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Email Id */}
        <div>
          <label className="block font-medium mb-2">Email ID</label>
          <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* GSTIN */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">GSTIN</label>
          <input
            type="text"
            pattern="[0-9A-Z]{15}"
            title="Enter 15-character alphanumeric GSTIN"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Shipping Address */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Shipping Address</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attention */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Attention</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Country */}
        <div>
          <label className="block font-medium mb-2">City</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-2">Address</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* City */}
        <div>
          <label className="block font-medium mb-2">District</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* District */}
        <div>
          <label className="block font-medium mb-2">State</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* State */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Country</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;