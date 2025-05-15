import React from "react";
import { Search } from "lucide-react";

const EstimateForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Estimate</h1>

      {/* Customer Name with Search Icon */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Customer Name</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Customer"
            className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>
      </div>

      {/* Estimate Date, Expiry Date, Terms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-2">Estimate Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Expiry Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Terms and Conditions */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block font-medium mb-2">Terms and Conditions</label>
          <textarea
            rows="3"  // Increased from 3 to 5
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

      </div>

      {/* Items Table */}
      <h2 className="text-xl font-semibold mb-4">Items</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Discount</th>
              <th className="border px-4 py-2 text-left">Tax</th>
              <th className="border px-4 py-2 text-left">GST</th>
              <th className="border px-4 py-2 text-left">Quantity</th>
              <th className="border px-4 py-2 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 rounded" />
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 rounded" />
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 rounded" />
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 rounded" />
              </td>
              <td className="border px-4 py-2">
                <input type="number" className="w-full border px-2 py-1 rounded" />
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 rounded" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Row Button */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Add Row
        </button>
      </div>

      {/* Save Button */}
      <div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EstimateForm;
