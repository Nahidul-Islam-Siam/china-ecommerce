import React from 'react';

const InstrumentsAndMeters = () => {
  const instruments = [
    { name: 'Gas Analyzer', img: '/images/gas-analyzer.png' },
    { name: 'Test Machine', img: '/images/test-machine.png' },
    { name: 'Centrifuge', img: '/images/centrifuge.png' },
    { name: 'X Ray Machine', img: '/images/x-ray-machine.png' },
    { name: 'Pressure Gauge', img: '/images/pressure-gauge.png' },
    { name: 'Test Tube', img: '/images/test-tube.png' },
    { name: 'Flow Meter', img: '/images/flow-meter.png' },
    { name: 'Laser Distance Meter', img: '/images/laser-distance-meter.png' },
  ];

  return (
    <div className="p-4 shadow bg-white border-2 m-6">
      <div className="flex">
        <div className="w-1/3 p-4 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Flow-Meter.webp')" }}>
          <h2 className="text-xl font-semibold mb-4">Instruments & Meters</h2>
          <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Source Now</button>
        </div>
        <div className="w-2/3 grid grid-cols-4 gap-4 p-4">
          {instruments.map((instrument, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={instrument.img} alt={instrument.name} className="w-24 h-24 object-cover" />
              <span className="mt-2 text-center">{instrument.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstrumentsAndMeters;
