// import React from 'react';

// const InstrumentsAndMeters = () => {
//   const instruments = [
//     { name: 'Gas Analyzer', img: '/Gas-Analyzer.webp' },
//     { name: 'Test Machine', img: '/Test-Machine.webp' },
//     { name: 'Centrifuge', img: '/Centrifuge.webp' },
//     { name: 'X Ray Machine', img: '/X-Ray-Machine.webp' },
//     { name: 'Optical Lens', img: '/Optical-Lens.webp' },
//     { name: 'Test Tube', img: '/Test-Tube.webp' },
//     { name: 'Flow Meter', img: '/Flow-Meter-image.webp' },
//     { name: 'Laser Distance Meter', img: '/images/laser-distance-meter.png' },
//   ];

//   return (
//     <div className="p-4 shadow bg-white border-2 m-6">
//       <div className="flex">
//         <div className="w-1/3 p-4 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Flow-Meter.webp')" }}>
//           <h2 className="text-xl font-semibold mb-4">Instruments & Meters</h2>
//           <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Source Now</button>
//         </div>
//         <div className="w-2/3 grid grid-cols-4 gap-4 p-4">
//           {instruments.map((instrument, index) => (
//             <div key={index} className="p-2 border text-left flex flex-col justify-between">
              
//               <span className="">{instrument.name}</span>
//               <img src={instrument.img}  alt={instrument.name} className="w-24 ml-20 ite h-24 object-cover" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstrumentsAndMeters;

import React from 'react';

const  InstrumentsAndMeters = () => {
  const instruments = [
    { name: 'Gas Analyzer', img: '/Gas-Analyzer.webp' },
    { name: 'Test Machine', img: '/Test-Machine.webp' },
    { name: 'Centrifuge', img: '/Centrifuge.webp' },
    { name: 'X Ray Machine', img: '/X-Ray-Machine.webp' },
    { name: 'Optical Lens', img: '/Optical-Lens.webp' },
    { name: 'Test Tube', img: '/Test-Tube.webp' },
    { name: 'Flow Meter', img: '/Flow-Meter-image.webp' },
    { name: 'Laser Distance Meter', img: '/images/laser-distance-meter.png' },
  ];

  return (
    <div className="p-4 shadow bg-white border m-6">
      <div className="flex">
        <div className="w-1/4 p-4 flex flex-col justify-start items-start relative">
          <img src="/Flow-Meter.webp" alt="Industrial Equipment" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-4">Industrial Equipment & Components</h2>
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

export default  InstrumentsAndMeters;
