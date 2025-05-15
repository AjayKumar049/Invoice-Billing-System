import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom'
const AllEstimate = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">AllEstimate</h1>
        <div className="flex items-center space-x-2">
          <Link to='/newEstimate'><button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New</button>
          </Link>

          {/* Search Input - small and aligned right */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Estimate Number</th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Estimated Date</th>
              <th className="px-4 py-3 text-left">Expiry Date</th>
              <th className="px-4 py-3 text-left">Action</th>

            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Est2025-001</td>
              <td className="px-4 py-2">john</td>
              <td className="px-4 py-2">14-05-2025</td>
              <td className="px-4 py-2">31-05-2025</td>


              <td className="px-4 py-2 flex space-x-2">
                <button className="text-blue-600 hover:underline flex items-center">
                  <Edit size={16} className="mr-1" /> Edit
                </button>
                <button className="text-red-600 hover:underline flex items-center">
                  <Trash2 size={16} className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEstimate;
