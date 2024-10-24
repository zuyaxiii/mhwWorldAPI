import React, { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import SearchBar from "./SearchBarLocation";
import { fetchLocationData } from "./LocationHook";
import { IMonsterHunterWorldLocationMapZone } from "../../interface/LocationInterface/mhwinterfaceLocationDetail";

const LocationPage: React.FC = () => {
  const [LocationData, setLocationData] = useState<
    IMonsterHunterWorldLocationMapZone[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    const getLocationData = async () => {
      const data = await fetchLocationData(searchTerm);
      setLocationData(data);
    };

    getLocationData();
  }, [searchTerm]);

  const name = [...new Set(LocationData.map((Location) => Location.name))];

  const filteredLocation = LocationData.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedName ? location.name === selectedName : true)
  );

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        selectedName={selectedName}
        onNameChange={(e) => setSelectedName(e.target.value)}
        name={name}
      />

      <div className="bg-[url('./images/bgall.png')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredLocation.length > 0 ? (
          filteredLocation.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <p className="text-center col-span-full">No locations found</p>
        )}
      </div>
    </div>
  );
};

export default LocationPage;
