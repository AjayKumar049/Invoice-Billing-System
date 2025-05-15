import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import {Link} from 'react-router-dom'
const AllCustomer = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">ActiveCustomer</h1>
        <div className="flex items-center space-x-2">
         <Link to='/newCustomer'><button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New</button>
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
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">GSTIN</th>
              <th className="px-4 py-3 text-left">Work Phone</th>
              <th className="px-4 py-3 text-left">City</th>
              <th className="px-4 py-3 text-left">Shipping Address</th>
              <th className="px-4 py-3 text-left">District</th>
              <th className="px-4 py-3 text-left">State</th>
              <th className="px-4 py-3 text-left">Country</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">ABC Corp</td>
              <td className="px-4 py-2">22AAAAA0000A1Z5</td>
              <td className="px-4 py-2">9876543210</td>
              <td className="px-4 py-2">Mumbai</td>
              <td className="px-4 py-2">123 Marine Drive</td>
              <td className="px-4 py-2">Mumbai Suburban</td>
              <td className="px-4 py-2">Maharashtra</td>
              <td className="px-4 py-2">India</td>
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

export default AllCustomer;
