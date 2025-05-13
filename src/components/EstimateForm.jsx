import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const EstimateForm = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl text-indigo-500 font-bold">Estimate</h1>

      {/* Form Section */}
      <div className="space-y-4">
        {/* Customer Name */}
        <div className="w-full max-w-sm">
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Enter customer name"
            className="mt-1 block w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Estimate and Expiry Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="estimateDate" className="block text-sm font-medium text-gray-700">
              Estimated Date
            </label>
            <input
              type="date"
              id="estimateDate"
              name="estimateDate"
              className="mt-1 block w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              className="mt-1 block w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
            Terms and Conditions
          </label>
          <textarea
            id="terms"
            name="terms"
            rows="4"
            placeholder="Enter terms and conditions here..."
            className="mt-1 block w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <h2 className="text-lg font-semibold mb-2">Item Table</h2>
        <table className="min-w-[600px] w-full table-auto border-collapse border border-gray-400 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-400 px-3 py-2 text-left">Name</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Unit Price</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Discount</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Tax</th>
              <th className="border border-gray-400 px-3 py-2 text-left">GST</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-3 py-2">Item A</td>
              <td className="border border-gray-400 px-3 py-2">500</td>
              <td className="border border-gray-400 px-3 py-2">10%</td>
              <td className="border border-gray-400 px-3 py-2">5%</td>
              <td className="border border-gray-400 px-3 py-2">18%</td>
              <td className="border border-gray-400 px-3 py-2">527</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-3 py-2">Item B</td>
              <td className="border border-gray-400 px-3 py-2">1000</td>
              <td className="border border-gray-400 px-3 py-2">0%</td>
              <td className="border border-gray-400 px-3 py-2">5%</td>
              <td className="border border-gray-400 px-3 py-2">18%</td>
              <td className="border border-gray-400 px-3 py-2">1230</td>
            </tr>
          </tbody>
        </table>

        {/* Add Row Button */}
        <div className="mt-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-white bg-sky-500/100"
          >
            Add Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm;
