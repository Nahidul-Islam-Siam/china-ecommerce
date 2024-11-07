import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const LeftSidebar = () => {
    const categories = [
      'Manufacturing & Processing Machinery',
      'Consumer Electronics',
      'Industrial Equipment & Components',
      'Electrical & Electronics',
      'Construction & Decoration',
      'Light Industry & Daily Use',
      'Auto, Motorcycle Parts & Accessories',
      'Apparel & Accessories',
      'Lights & Lighting',
      'Sporting Goods & Recreation',
      'Transportation',
      'Arts & Crafts',
      'Health & Medicine',
      'Packaging & Printing',
      'Computer Products',
    ];
  
    return (
      <div className="w-1/4 p-4 ">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-black hover:text-red-700"><FiMenu /> Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-2 text-[#555555] font-normal text-sm hover:text-red-500">
              {category}
            </li>
          ))}
        </ul>
        <h2 className="text-sm font-normal mb-4 flex items-center gap-2 text-[#1470CC] hover:text-red-700">More Categories <IoIosArrowForward /></h2>
      </div>
    );
  };
  
  export default LeftSidebar;
  