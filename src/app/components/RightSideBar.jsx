import Image from "next/image";

const RightSidebar = () => {
    const suggestions = [
      { name: 'Flow Meter', products: '80,000+' },
      { name: 'Liquid Meter', products: '178,000+' },
      { name: 'Energy Meter', products: '185,000+' },
      { name: 'Water Flow Meter', products: '278,000+' },
      { name: 'Gas Meter', products: '60,000+' },
    ];
  
    return (
      <div className="w-1/4 p-4 border-l">
        <h2 className="text-lg font-semibold mb-4">You May Like</h2>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center">
              <Image
    src={`/${suggestion.name.toLowerCase().replace(' ', '-')}-image.webp`} 
    alt={suggestion.name} 
    width={52} // 12 * 4 (Tailwind's `w-12` equivalent in pixels)
    height={52} // 12 * 4 (Tailwind's `h-12` equivalent in pixels)
    className="mr-2" 
/>

                <div>
                  <div className="text-sm">{suggestion.name}</div>
                  <div className="text-gray-500 text-xs">{suggestion.products} Products</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RightSidebar;
  