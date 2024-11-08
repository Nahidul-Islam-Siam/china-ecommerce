import React from 'react';

const InstrumentsAndMeters = () => {
  const instruments = [
    { name: 'Night Vision', img: '/images/night-vision.png' },
    { name: 'Centrifuge', img: '/images/centrifuge.png' },
    { name: 'X Ray Machine', img: '/images/x-ray-machine.png' },
    { name: 'Pressure Gauge', img: '/images/pressure-gauge.png' },
    { name: 'Test Tube', img: '/images/test-tube.png' },
    { name: 'Flow Meter', img: '/images/flow-meter.png' },
    { name: 'Geo Analyzer', img: '/images/geo-analyzer.png' },
    { name: 'Laser Distance Meter', img: '/images/laser-distance-meter.png' },
  ];

  return (
    <div className="p-4 shadow bg-white border-2 m-6">
      <h2 className="text-xl font-semibold mb-4">Instruments & Meters</h2>
      <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Source Now</button>
      <div className="grid grid-cols-4 gap-4">
        {instruments.map((instrument, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={instrument.img} alt={instrument.name} className="w-24 h-24 object-cover" />
            <span className="mt-2 text-center">{instrument.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentsAndMeters;
