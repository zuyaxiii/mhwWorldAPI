import React from "react";
import ArmorPage from "../../components/ArmorFrom/ArmorPage";

import Logo from '../../images/logo_iceborne_l.png';

const ArmorDetailPage = () => {
  return (
    <div>
      <div className="flex justify-center bg-[url('./images/bgall.png')]">
        <img src={Logo} className="max-h-64 mt=[20px]" />
      </div>
      <ArmorPage />
    </div>
  );
};

export default ArmorDetailPage;
