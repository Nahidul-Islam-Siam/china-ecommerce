import Image from "next/image";
import BannerPage from "./components/Banner";
import SelectedTrendingProducts from "./components/SelectedTrendingProducts";
import InstrumentsAndMeters from "./components/InstrumentsAndMeters";
import IndustrialEquipmentComponents from "./components/IndustrialEquipmentComponents";
import ElectricalElectronics from "./components/Electrical&Electronics";

export default function Home() {
  return (
    
    <div>
      <BannerPage></BannerPage>
      <SelectedTrendingProducts></SelectedTrendingProducts>
      <InstrumentsAndMeters></InstrumentsAndMeters>
      <IndustrialEquipmentComponents></IndustrialEquipmentComponents>
      <ElectricalElectronics></ElectricalElectronics>
    </div>
  );
}
