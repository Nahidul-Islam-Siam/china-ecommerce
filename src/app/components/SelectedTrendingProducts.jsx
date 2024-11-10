import React from 'react';

const SelectedTrendingProducts = () => {
  const products = [
    { name: 'Bearing', img: '/Bearing.jpg' },
    { name: 'Infant Apparel', img: '/Infant-Apparel.jpg' },
    { name: 'Auto Repair Equipment', img: '/Auto-Repair-Equipment.jpg' },
    { name: 'Carpet & Rug', img: '/Carpet-Rug.jpg' },
    { name: 'Water Park', img: '/Water-Park.jpg' },
    { name: 'Beauty & Personal Care', img: '/Beauty-Personal-Care.jpg' },
    { name: 'Sensor', img: '/Sensor.jpg' },
    { name: 'Office Furniture', img: '/Office-Furniture.jpg' },
    { name: 'Kitchen Furniture', img: '/Kitchen-Furniture.jpg' },
    { name: 'Generator', img: '/Generator.jpg' },
    { name: 'Brick Making Machine', img: '/Brick-Making-Machine.jpg' },
    { name: 'Vending-Machine', img: '/Vending-Machine.jpg' },
  ];

  return (
    <div className=" shadow bg-white border-2 m-6 p-4">
      <h2 className="text-xl font-semibold mb-4">Selected Trending Products</h2>
      <div className="grid grid-cols-6 gap-4">
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
