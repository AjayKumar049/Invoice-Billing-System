import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Edit, Trash2 } from 'lucide-react';
const AllItems = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">ActiveItems</h1>
        <div className="flex items-center space-x-2">
          <Link to='/newItem'><button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New</button>
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
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Manufacturer</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Discount</th>
              <th className="px-4 py-3 text-left">Tax</th>
              <th className="px-4 py-3 text-left">GST</th>
              <th className="px-4 py-3 text-left">Medicine Type</th>
              <th className="px-4 py-3 text-left">Dosage</th>
              <th className="px-4 py-3 text-left">ExpiryDate</th>
              <th className="px-4 py-3 text-left">SellingPrice</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Loren</td>
              <td className="px-4 py-2">Loren Pvt.ltd</td>
              <td className="px-4 py-2">50</td>
              <td className="px-4 py-2">5%</td>
              <td className="px-4 py-2">Taxable</td>
              <td className="px-4 py-2">6%</td>
              <td className="px-4 py-2">Tablet</td>
              <td className="px-4 py-2">500Mg</td>
              <td className="px-4 py-2">31-5-27</td>
              <td className="px-4 py-2">200RS</td>
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



export default AllItems