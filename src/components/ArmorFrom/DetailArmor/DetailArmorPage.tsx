import React from "react";
import { IMonsterHunterWorldArmorDetail } from "../../../interface/ArmorInterface/mhwinterfaceDetail";
import { Link, useNavigate, useParams } from "react-router-dom";

interface ArmorCardProps {
  armor: IMonsterHunterWorldArmorDetail;
}

const DetailArmorPage: React.FC<ArmorCardProps> = ({ armor }) => {
  const { armorId } = useParams<{ armorId: string }>();
  const navigate = useNavigate();
  const materialsCount = armor.crafting.materials.length;

  const currentArmorId = armorId ? parseInt(armorId, 10) : 0;

  const goToNextArmor = () => {
    const nextArmorId = currentArmorId + 1;
    navigate(`/ArmorDetailing/${nextArmorId}`);
  };

  const goToPreviousArmor = () => {
    if (currentArmorId > 1) {
      const previousArmorId = currentArmorId - 1;
      navigate(`/ArmorDetailing/${previousArmorId}`);
    }
  };

  return (
    <div className="max-h-screen min-h-screen">
    <div className="max-w-full mx-auto px-6 bg-[url('./images/monster-hunter-world-iceborne-background.jpg')] bg-repeat-y">
      <div className="relative overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto shadow-md sm:rounded-lg w-6/12 mx-auto mt-12">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              {armor.name}
              <div className="images mb-4 flex items-center justify-center space-x-6">
                {armor.assets?.imageMale && (
                  <div className="flex flex-col items-center">
                    <img
                      src={armor.assets.imageMale}
                      alt={`${armor.name} - Male`}
                      className="armor-image mb-2 w-64 h-64 object-cover rounded-lg shadow-md bg-slate-700/[.50]"
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Male
                    </p>
                  </div>
                )}
                {armor.assets?.imageFemale && (
                  <div className="flex flex-col items-center">
                    <img
                      src={armor.assets.imageFemale}
                      alt={`${armor.name} - Female`}
                      className="armor-image mb-2 w-64 h-64 object-cover rounded-lg shadow-md bg-slate-700/[.50]"
                    />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Female
                    </p>
                  </div>
                )}
              </div>
            </caption>
          </table>
        </div>
      </div>

      <div className="flex w-9/12 mx-auto space-x-4 mt-4">
        <div className="w-full rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3" colSpan={2}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Base
                </th>
                <td className="px-6 py-4">
                  {armor.defense?.base !== undefined
                    ? armor.defense.base
                    : "N/A"}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Max
                </th>
                <td className="px-6 py-4">
                  {armor.defense?.max !== undefined ? armor.defense.max : "N/A"}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Augmented
                </th>
                <td className="px-6 py-4">
                  {armor.defense?.augmented !== undefined
                    ? armor.defense.augmented
                    : "N/A"}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Slots
                </th>
                <td className="px-6 py-4">
                  {armor.slots.length > 0
                    ? armor.slots.map((slot) => `Rank ${slot.rank}`).join(", ")
                    : "None"}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Set Bonus
                </th>
                <td className="px-6 py-4">
                  {armor.armorSet.bonus !== null
                    ? armor.armorSet.bonus
                    : "None"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3" colSpan={2}>
                  Additional Stats
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Fire Resistance
                </th>
                <td className="px-6 py-4">{armor.resistances.fire}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Water Resistance
                </th>
                <td className="px-6 py-4">{armor.resistances.water}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Thunder Resistance
                </th>
                <td className="px-6 py-4">{armor.resistances.thunder}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Ice Resistance
                </th>
                <td className="px-6 py-4">{armor.resistances.ice}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dragon Resistance
                </th>
                <td className="px-6 py-4">{armor.resistances.dragon}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="w-full rounded-lg border border-gray-200"
          style={{
            boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
            height: `${Math.max(150, materialsCount * 50)}px`,
          }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Materials Required
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {armor.crafting.materials.map((material) => (
                <tr
                  key={material.item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{material.item.name}</td>
                  <td className="px-6 py-4 text-center">{material.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="navigation-buttons flex justify-between mt-4 w-10/12 mx-auto">
        <button
          onClick={goToPreviousArmor}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Back
        </button>

        <div className="flex justify-center space-x-4 mt-4">
          <Link
            to={`/DetailArmor`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Back to Armor List
          </Link>
          <Link
            to={`/`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Back to Home
          </Link>
        </div>
        <button
          onClick={goToNextArmor}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default DetailArmorPage;
