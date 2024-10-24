import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { fetchWeaponData } from "./WeaponHook";
import { IMonsterHunterWorldWeaponList } from "../../interface/WeaponInterface/mhwinterfaceWeaponList";
import WeaponCard from './WeaponCard'

const WeaponPage: React.FC = () => {
  const [weaponData, setweaponData] = useState<IMonsterHunterWorldWeaponList[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<number | undefined>(undefined);
  const [selectedTypes, setselectedTypes] = useState("");
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  useEffect(() => {
    const getweaponData = async () => {
      const data = await fetchWeaponData(searchTerm);
      setweaponData(data);
    };

    getweaponData();
  }, [searchTerm]);

  const rarity = [...new Set(weaponData.map(weapon => weapon.rarity))]
  const types = [...new Set(weaponData.map(weapon => weapon.type))]
  const elements = [...new Set(weaponData.flatMap(weapon => weapon.elements.map(element => element.type)))];

  const filteredweapon = weaponData.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRarity === 0-9 ? weapon.rarity >= 0 && weapon.rarity <= 9 : true) && // เพิ่มเงื่อนไขสำหรับ "0-9"
    (selectedRarity === undefined ? true : weapon.rarity === Number(selectedRarity)) && // เงื่อนไขสำหรับ All Rarity
    (selectedTypes ? weapon.type === selectedTypes : true) &&
    (selectedElements.length > 0 
      ? weapon.elements.some(element => selectedElements.includes(element.type))
      : true)
  );
  

  return (
    <div>
      <SearchBar
       searchTerm={searchTerm}
       onSearchChange={(e) => setSearchTerm(e.target.value)}
       
       selectedRarity={selectedRarity?.toString() || ""} 
       onRarityChange={(e) => setSelectedRarity(e.target.value ? Number(e.target.value) : undefined)}
       rarity={rarity}

        selectedTypes={selectedTypes}
        onTypeChange={(e) => setselectedTypes(e.target.value)}
        type={types}

        selectedElements={selectedElements}
        onElementsChange={(e) => setSelectedElements(Array.from(e.target.selectedOptions, option => option.value))}
        elements={elements}

      />

      <div className="bg-[url('./images/bgall.png')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredweapon.map((weapon) => (
          <WeaponCard key={weapon.id} weapon={weapon} />
        ))}
      </div>
    </div>
  );
};


export default WeaponPage;
