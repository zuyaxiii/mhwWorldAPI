import React from "react";
import { Link } from "react-router-dom";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  selectedSpecies: string;
  onSpeciesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  species : string[];

  selectedTypes: string;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedSpecies,
  onSpeciesChange,
  species,
  selectedTypes,
  onTypeChange,
  type,
}) => {
  return (
    <div className="bg-[url('./images/bgall.png')] bg-center flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:flex-1">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            value={searchTerm}
            onChange={onSearchChange}
            className="block w-full pl-10 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Monster"
          />
        </div>

        <div className="relative w-full md:flex-1">
          <label
            htmlFor="countries"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Select Species
          </label>
          <select
            id="countries"
            value={selectedSpecies}
            onChange={onSpeciesChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Species</option>
            {species.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full md:flex-1">
          <label
            htmlFor="type"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Select Types
          </label>
          <select
            id="type"
            value={selectedTypes}
            onChange={onTypeChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Types</option>
            {type.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            to={`/`}
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-white bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
