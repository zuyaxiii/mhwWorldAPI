import React, { useEffect } from "react";
import {
  mhwListArmorServices,
  mhwDetailArmorServices,
} from "../../services/indexServies";
import SelectPage from "./SelectPage";

import Logo from '../../images/logo_iceborne_l.png';

const HomePage = () => {
  const callArmorData = async () => {
    const data = await mhwDetailArmorServices.getmhwArmorDetail(1661);
    console.log("data", data.data);
  };
  useEffect(() => {
    callArmorData();
  }, []);

  return (
    <div className="bg-[url('./images/wallpaperflare.com_wallpaper.jpg')]"  >
      <div className="flex justify-center">
        <img src={Logo} className="max-h-64 mt=[20px]" />
      </div>
      <div>
      <SelectPage />
      </div>
    </div>
  );
};

export default HomePage;
