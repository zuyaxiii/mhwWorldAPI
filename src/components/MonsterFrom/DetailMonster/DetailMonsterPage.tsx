import React from "react";
import {
  Ailment,
  IMonsterHunterWorldMonsterDetail,
  Item,
  MonsterLocation,
  Resistance,
  Weakness,
} from "../../../interface/MonsterInterface/mhwinterfaceMonsterDetail";
import { Link, useNavigate, useParams } from "react-router-dom";

interface MonsterCardProps {
  monster: IMonsterHunterWorldMonsterDetail;
}

const DetailMonsterPage: React.FC<MonsterCardProps> = ({ monster }) => {
  const { monsterId } = useParams<{ monsterId: string }>();
  const navigate = useNavigate();

  const currentMonsterId = monsterId ? parseInt(monsterId, 10) : 0;

  const goToNextMonster = () => {
    const nextMonsterId = currentMonsterId + 1;
    navigate(`/MonsterDetailing/${nextMonsterId}`);
  };

  const goToPreviousMonster = () => {
    if (currentMonsterId > 1) {
      const previousMonsterId = currentMonsterId - 1;
      navigate(`/MonsterDetailing/${previousMonsterId}`);
    }
  };

  return (
    <div className="max-h-screen min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto px-6 bg-[url('./images/monster-hunter-world-iceborne-background.jpg')] bg-repeat-y bg-cover">
        <div className="relative overflow-hidden sm:rounded-lg ">
          <div className="overflow-x-auto shadow-md sm:rounded-lg w-6/12 mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg p-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-2xl font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {monster.name}
                <div className="images mb-4 flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="object-cover rounded-lg shadow-md"
                      src={`/imageMonster/${monster.name}.jpg`}
                      alt={`${monster.name}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/imageMonster/Monsterdefault.jpg";
                      }}
                    />
                  </div>
                </div>
                <td className="px-6 py-4 text-xs text-gray-700 text-left uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <p>{monster.description}</p>
                </td>
              </caption>
              <div className="grid grid-cols-2 gap-6">
                <td className="px-6 py-4 text-sm text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <p>Type : {monster.type}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <p>Species : {monster.species}</p>
                </td>
              </div>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto mt-6 flex gap-6">
          <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1 h-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Elements
                  </th>
                </tr>
              </thead>

              <tbody>
                {monster.elements && monster.elements.length > 0 ? (
                  monster.elements.map(
                    (_element: (typeof monster.elements)[0], index: number) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{_element}</td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={1}
                      className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      No Elements available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1 h-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Resistances
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Condition
                  </th>
                </tr>
              </thead>
              <tbody>
                {monster.resistances && monster.resistances.length > 0 ? (
                  monster.resistances.map(
                    (resistance: Resistance, index: number) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{resistance.element}</td>
                        <td className="px-6 py-4">{resistance.condition}</td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      No condition available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto relative overflow-auto shadow-md sm:rounded-lg h-full mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Zone Count
                </th>
              </tr>
            </thead>
            <tbody>
              {monster.locations &&
                monster.locations.map(
                  (location: MonsterLocation, index: number) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{location.name}</td>
                      <td className="px-6 py-4">{location.zoneCount}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>

        <div className="w-9/12 mx-auto relative overflow-auto shadow-md sm:rounded-lg h-full mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                  Weaknesses
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Stars
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Condition
                </th>
              </tr>
            </thead>
            <tbody>
              {monster.weaknesses?.map(
                (weaknesses: Weakness, index: number) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{weaknesses.element}</td>
                    <td className="px-6 py-4">
                      {weaknesses.stars
                        ? "★".repeat(weaknesses.stars)
                        : "No stars available"}
                    </td>
                    <td className="px-6 py-4">{weaknesses.condition}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="w-9/12 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg h-full mt-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Recovery Items
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Rarity
                </th>
                <th scope="col" className="px-6 py-3">
                  Value
                </th>
                <th scope="col" className="px-6 py-3">
                  Carry Limit
                </th>
              </tr>
            </thead>
            <tbody>
              {monster.ailments && monster.ailments.length > 0 ? (
                monster.ailments.map((ailment: Ailment, ailmentIndex: number) =>
                  ailment.recovery.items.map(
                    (item: Item, itemIndex: number) => (
                      <tr
                        key={`${ailmentIndex}-${itemIndex}`}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.description}</td>
                        <td className="px-6 py-4">{item.rarity}</td>
                        <td className="px-6 py-4">{item.value}</td>
                        <td className="px-6 py-4">{item.carryLimit}</td>
                      </tr>
                    )
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    No Recovery available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="navigation-buttons flex justify-between mt-4 w-10/12 mx-auto">
          <button
            onClick={goToPreviousMonster}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Back
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to={`/Monster`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to Monster List
            </Link>
            <Link
              to={`/`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to Home
            </Link>
          </div>
          <button
            onClick={goToNextMonster}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailMonsterPage;
