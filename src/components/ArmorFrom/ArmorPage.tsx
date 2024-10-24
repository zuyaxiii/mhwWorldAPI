import React, { useState, useEffect } from "react";
import ArmorCard from "./ArmorCard";
import SearchBar from "./SearchBar";
import { fetchArmorData } from "./ArmorHook";
import { IMonsterHunterArmorList } from "../../interface/ArmorInterface/mhwinterfaceArmorList";

const ArmorPage: React.FC = () => {
  const [armorData, setArmorData] = useState<IMonsterHunterArmorList[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRank, setSelectedRank] = useState("");
  const [selectedTypes, setselectedTypes] = useState("");

  useEffect(() => {
    const getArmorData = async () => {
      const data = await fetchArmorData(searchTerm);
      setArmorData(data);
    };

    getArmorData();
  }, [searchTerm]);

  const ranks = [...new Set(armorData.map(armor => armor.rank))]
  const typesArmor = [...new Set(armorData.map(armor => armor.type))]

  const filteredArmor = armorData.filter((armor) =>
    armor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRank ? armor.rank === selectedRank : true) &&
    (selectedTypes ? armor.type === selectedTypes : true)
  );

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}

        selectedRank={selectedRank}
        onRankChange={(e) => setSelectedRank(e.target.value)}
        ranks={ranks}

        selectedTypes={selectedTypes}
        onTypeChange={(e) => setselectedTypes(e.target.value)}
        type={typesArmor}
      />

      <div className="bg-[url('./images/bgall.png')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredArmor.map((armor) => (
          <ArmorCard key={armor.id} armor={armor} />
        ))}
      </div>
    </div>
  );
};


export default ArmorPage;
