import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSideBar";
import Slidebar from "./Slidebar";


const BannerPage = () => {
  return (
    <div className="flex shadow bg-white border-2 m-6">
      <LeftSidebar />
      <Slidebar />
      <RightSidebar />
    </div>
  );
};

export default BannerPage;
