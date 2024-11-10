import React from 'react';

const IndustrialEquipmentComponents = () => {
  const instruments = [
    { name: 'Reducer', img: '/Reducer.webp' },
    { name: 'Air Filter', img: '/Air-Filter.webp' },
    { name: 'High-Pressure-Washer', img: '/High-Pressure-Washer.webp' },
    { name: 'X Ray Machine', img: '/X-Ray-Machine.webp' },
    { name: 'Wind Turbine', img: '/Wind-Turbine.webp' },
    { name: 'Diesel-Generator-Set', img: '/Diesel-Generator-Set.webp' },
    { name: 'Engine', img: '/Engine.webp' },
    { name: 'Boiler', img: '/Boiler.webp' },
  ];

  return (
    <div className="p-4 shadow bg-white border-2 m-6">
      <div className="flex">
        <div className="w-1/3 p-4 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Flow-Meter.webp')" }}>
          <h2 className="text-xl font-semibold mb-4">Industrial Equipment & Components </h2>
          <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Source Now</button>
        </div>
        <div className="w-2/3 grid grid-cols-4 gap-4 p-4">
          {instruments.map((instrument, index) => (
            <div key={index} className="p-2 border text-left flex flex-col justify-between">
              
              <span className="">{instrument.name}</span>
              <img src={instrument.img}  alt={instrument.name} className="w-24 ml-20 ite h-24 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialEquipmentComponents;
