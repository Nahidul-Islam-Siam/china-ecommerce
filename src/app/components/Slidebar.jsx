import Image from "next/image";

const Slidebar = () => {
    return (
      <div className="w-2/3 pt-4">
        <div className="mb-6">
          <Image src="/banner1.webp" alt="Banner 1" layout="responsive" width={700} height={700} />
        </div>
        <div className="grid my-auto text-left grid-cols-4 gap-2">
          <div className="p-2 border text-left flex">
            <h3 className="">SMART EXPO</h3>
            <Image src="/expo.png" className="mt-4" alt="Smart Expo" width={100} height={80} />
          </div>
          <div className="p-2 border text-left flex">
            <h3 className="mb-2">Secured Trading Service</h3>
            <Image src="/secured-trading.webp" className="mt-4" alt="Secured Trading" width={80} height={80} />
          </div>
          <div className="p-2 border text-left flex  ">
            <h3 className="mb-2">Star Suppliers</h3>
            <Image src="/star-suppliers.webp" className="" alt="Star Suppliers" width={100} height={80} />
          </div>
          <div className="p-2 border text-left flex flex-col ">
            <h3 className="">Selected <br /> Supplier</h3>
            <Image src="/selected-supplier.webp" className="ml-10" alt="Selected Supplier" width={100} height={80} />
          </div>
        </div>
      </div>
    );
};

export default Slidebar;
