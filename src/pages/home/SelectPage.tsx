import React from "react";
import {CardLocation , CardArmor , CardWeapon , CardMonster} from "./card";

const SelectPage = () => {
  return (
    <div>
      <div className="rounded-xl ">
          <div className="flex justify-center">
            <div className="m-54 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <CardArmor />
              <CardWeapon />
              <CardMonster />
              <CardLocation />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
