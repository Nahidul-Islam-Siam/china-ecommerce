import React from 'react';

const SelectedTrendingProducts = () => {
  const products = [
    { name: 'Mould', img: '/images/mould.png' },
    { name: 'Agriculture Food', img: '/images/agriculture-food.png' },
    { name: 'Socket & Plug', img: '/images/socket-plug.png' },
    { name: 'Fabric', img: '/images/fabric.png' },
    { name: 'Salon Furniture', img: '/images/salon-furniture.png' },
    { name: 'Plastic Machinery', img: '/images/plastic-machinery.png' },
    { name: 'Elevator', img: '/images/elevator.png' },
    { name: 'Computer', img: '/images/computer.png' },
    { name: 'Paint & Coating', img: '/images/paint-coating.png' },
    { name: 'Lighting Decoration', img: '/images/lighting-decoration.png' },
    { name: 'Valve', img: '/images/valve.png' },
    { name: 'Car Brake', img: '/images/car-brake.png' },
  ];

  return (
    <div className=" shadow bg-white border-2 m-6 p-4">
      <h2 className="text-xl font-semibold mb-4">Selected Trending Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={product.img} alt={product.name} className="w-24 h-24 object-cover" />
            <span className="mt-2 text-center">{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedTrendingProducts;
