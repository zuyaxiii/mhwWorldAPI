import React from "react";
import WeaponPage from "../../components/WeaponFrom/WeaponPage";

import Logo from '../../images/logo_iceborne_l.png';

const MonsterDetailPage = () => {
  return (
    <div>
      <div className="flex justify-center bg-[url('./images/bgall.png')]">
        <img src={Logo} className="max-h-64 mt=[20px]" />
      </div>
      <WeaponPage />
    </div>
  );
};

export default MonsterDetailPage;
