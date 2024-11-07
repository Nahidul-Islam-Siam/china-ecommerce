import Image from "next/image";

const Slidebar = () => {
    return (
      <div className="w-2/3 pt-4">
        <div className="mb-6">
        <Image src="/banner1.webp" alt="Banner 1" layout="responsive" width={700} height={300} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border">
            <h3>SMART EXPO</h3>
            {/* Add relevant content here */}
          </div>
          <div className="p-4 border">
            <h3>Secured Trading Service</h3>
            {/* Add relevant content here */}
          </div>
          <div className="p-4 border">
            <h3>Star Suppliers</h3>
            {/* Add relevant content here */}
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    );
  };
  
  export default Slidebar;
  