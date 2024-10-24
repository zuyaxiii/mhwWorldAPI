import React from "react";
import { IMonsterHunterWorldWeaponList } from "../../interface/WeaponInterface/mhwinterfaceWeaponList";
import { Link } from "react-router-dom";

interface WeaponCardProps {
  weapon: IMonsterHunterWorldWeaponList;
}

const WeaponCard: React.FC<WeaponCardProps> = ({ weapon }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {weapon.name}
      </h5>
      {weapon.assets && weapon.assets.image ? (
        <img
          src={weapon.assets.image}
          alt={`${weapon.name} image`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      ) : (
        <p className="text-gray-500 text-center">No image available.</p>
      )}
      <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
        Type : <span className="font-normal">{weapon.type}</span>
      </p>
      <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
        Rarity : <span className="font-normal">{weapon.rarity}</span>
      </p>

      <p className="mb-4 font-semibold text-gray-700 dark:text-gray-300">
        Elements :{" "}
        <span className="font-normal">
          {weapon.elements.length > 0
            ? weapon.elements.map((element) => element.type).join(", ")
            : "No Elements"}
        </span>
      </p>
      <Link
        to={`/WeaponDetailing/${weapon.id}`}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default WeaponCard;
