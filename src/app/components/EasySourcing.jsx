import React from 'react';

const EasySourcing = () => {
  return (
    <div className="space-y-6">
      {/* Easy Sourcing Section */}
      <div
        className="flex flex-wrap bg-cover bg-center text-white p-6"
        style={{ backgroundImage: "url('/easy-sourcing-background.jpg')" }}
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">EASY SOURCING</h2>
          <p className="mb-2">An easy way to post your sourcing requests and get quotes.</p>
          <ul className="list-disc list-inside mb-4">
            <li>One request, multiple quotes</li>
            <li>Verified suppliers matching</li>
            <li>Quotes comparison and sample request</li>
          </ul>
          <a href="#" className="text-blue-300">Learn More &gt;</a>
        </div>
      </div>

      {/* Want to Get Quotations Section */}
      <div
        className="flex flex-wrap bg-cover bg-center p-6 text-white"
        style={{ backgroundImage: "url('/get-quotations-background.jpg')" }}
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Want to get quotations?</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Name or Keywords"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 flex">
              <input
                type="number"
                placeholder="Purchase Quantity"
                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
              />
              <select className="w-1/2 p-2 border border-gray-300 rounded">
                <option>Piece(s)</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
              Post Your Request Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EasySourcing;
