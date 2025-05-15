import React from "react";

const ItemForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Item Entry</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Manufacturer */}
        <div>
          <label className="block text-sm font-medium">Manufacturer</label>
          <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* HSN Code */}
        <div>
          <label className="block text-sm font-medium">HSN Code</label>
          <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Medicine Type */}
        <div>
          <label className="block text-sm font-medium">Medicine Type</label>
          <select className="mt-1 w-full border border-gray-300 rounded-md p-2">
            <option value="">Select Type</option>
            <option value="powder">Powder</option>
            <option value="oil">Oil</option>
            <option value="tonic">Tonic</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>

        {/* Dosage */}
        <div>
          <label className="block text-sm font-medium">Dosage</label>
          <input type="text" placeholder="e.g. 500mg" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input type="number" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Tax */}
        <div>
          <label className="block text-sm font-medium">Tax</label>
          <select className="mt-1 w-full border border-gray-300 rounded-md p-2">
            <option value="">Select Tax Type</option>
            <option value="taxable">Taxable</option>
            <option value="nontaxable">Non-Taxable</option>
          </select>
        </div>

        {/* GST */}
        <div>
          <label className="block text-sm font-medium">GST (%)</label>
          <input type="number" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Discount */}
        <div>
          <label className="block text-sm font-medium">Discount (%)</label>
          <input type="number" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium">Selling Price</label>
          <input type="number" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block text-sm font-medium">Expiry Date</label>
          <input type="date" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Save Button - spans both columns on md screens */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
