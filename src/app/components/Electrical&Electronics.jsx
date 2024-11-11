import React from 'react';

const  ElectricalElectronics = () => {
  const instruments = [
    { name: 'Fiber Optical', img: '/Fiber-Optical.jpg' },
    { name: 'Circuit Breaker', img: '/Circuit-Breaker.webp' },
    { name: 'GPS Tracker', img: '/GPS-Tracker.webp' },
    { name: 'VFD', img: '/VFD.webp' },
    { name: 'Electic Motor', img: '/Electric-Motor.webp' },
    { name: 'PCB', img: '/PCB.webp' },
    { name: 'UPS', img: '/UPS.webp' },
    { name: 'Storage Battery', img: '/Storage-Battery.webp' },
  ];

  return (
    <div className="p-4 shadow bg-white border m-6">
      <div className="flex">
        <div className="w-1/4 p-4 flex flex-col justify-start items-start relative">
          <img src="/Electronics.webp" alt="Electrical & Electronics" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-4">Electrical & Electronics</h2>
            <button className="px-4 py-2 bg-red-500 text-white rounded">Source Now</button>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-4 gap-4 p-4">
          {instruments.map((instrument, index) => (
            <div key={index} className="flex flex-col justify-between p-2 border h-full">
              <span className="mb-2">{instrument.name}</span>
              <div className="flex-grow flex items-end justify-end">
                <img src={instrument.img} alt={instrument.name} className="w-24 h-24 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  ElectricalElectronics;
