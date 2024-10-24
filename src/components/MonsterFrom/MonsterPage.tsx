import React, { useState, useEffect } from "react";
import MonsterCard from "./MonsterCard";
import SearchBar from "./SearchBar";
import { fetchMonsterData } from "./MonsterHook";
import { IMonsterHunterWorldMonsterList } from "../../interface/MonsterInterface/mhwinterfaceMonsterList";

const MonsterPage: React.FC = () => {
  const [monstersData, setMonsterData] = useState<IMonsterHunterWorldMonsterList[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedTypes, setselectedTypes] = useState("");

  useEffect(() => {
    const getMonsterData = async () => {
      const data = await fetchMonsterData(searchTerm);
      setMonsterData(data);
    };

    getMonsterData();
  }, [searchTerm]);

  const species = [...new Set(monstersData.map(Monster => Monster.species))]
  const typesMonster = [...new Set(monstersData.map(Monster => Monster.type))]

  const filteredMonster = monstersData.filter((Monster) =>
    Monster.species.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecies ? Monster.species === selectedSpecies : true) &&
    (selectedTypes ? Monster.type === selectedTypes : true)
  );

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}

        selectedSpecies={selectedSpecies}
        onSpeciesChange={(e) => setSelectedSpecies(e.target.value)}
        species={species}

        selectedTypes={selectedTypes}
        onTypeChange={(e) => setselectedTypes(e.target.value)}
        type={typesMonster}
      />

      <div className="bg-[url('./images/bgall.png')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredMonster.map((Monster) => (
          <MonsterCard key={Monster.id} monster={Monster} />
        ))}
      </div>
    </div>
  );
};


export default MonsterPage;
