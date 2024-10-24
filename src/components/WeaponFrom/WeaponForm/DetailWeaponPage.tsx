import React from "react";
import {
  ICrafting,
  IDurability,
  IMonsterHunterWorldWeaponDetail,
  ISlot,
} from "../../../interface/WeaponInterface/mhwinterfaceWeaponDetail";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IElement } from "../../../interface/WeaponInterface/mhwinterfaceWeaponList";

interface WeaponCardProps {
  weapon: IMonsterHunterWorldWeaponDetail;
}

const DetailWeaponPage: React.FC<WeaponCardProps> = ({ weapon }) => {
  const { weaponId } = useParams<{ weaponId: string }>();
  const navigate = useNavigate();

  const currentweaponId = weaponId ? parseInt(weaponId, 10) : 0;

  const goToNextWeapon = () => {
    const nextweaponId = currentweaponId + 1;
    navigate(`/WeaponDetailing/${nextweaponId}`);
  };

  const goToPreviousWeapon = () => {
    if (currentweaponId > 1) {
      const previousweaponId = currentweaponId - 1;
      navigate(`/WeaponDetailing/${previousweaponId}`);
    }
  };

  return (
    <div className="max-h-screen min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto px-6 bg-[url('./images/monster-hunter-world-iceborne-background.jpg')] bg-repeat-y bg-cover">
        <div className="relative overflow-hidden sm:rounded-lg ">
          <div className="overflow-x-auto shadow-md sm:rounded-lg w-6/12 mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg p-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-2xl font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {weapon.name}
                <div className="images mb-4 flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center">
                    {weapon.assets && weapon.assets.image ? (
                      <img
                        src={weapon.assets.image}
                        alt={`${weapon.name} image`}
                        className="w-full h-full object-cover rounded-lg mb-4"
                      />
                    ) : (
                      <p className="text-gray-500 text-center">
                        No image available.
                      </p>
                    )}
                  </div>
                </div>
              </caption>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center px-6 py-4 text-sm text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <p className="object-center">
                    Icon:
                    <img
                      src={weapon.assets.icon}
                      alt={`${weapon.name} image`}
                      className="mb-4 size-20 mt-2"
                    />
                  </p>
                </div>

                <div className="px-6 py-4 text-sm text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border p-4 rounded-md shadow-md">
                      <p className="font-semibold">Rarity</p>
                      <p className="font-bold mt-1">{weapon.rarity}</p>
                      <div className="flex justify-center mt-1">
                        <p className="font-bold">
                          {weapon.rarity
                            ? "★".repeat(weapon.rarity)
                            : "No stars available"}
                        </p>
                      </div>
                    </div>

                    <div className="border p-4 rounded-md shadow-md">
                      <p className="font-semibold">Attack</p>
                      <p className="font-bold mt-1">{weapon.attack.raw}</p>
                    </div>

                    <div className="border p-4 rounded-md shadow-md">
                      <p className="font-semibold">Damage Type</p>
                      <p className="font-bold mt-1">{weapon.damageType}</p>
                    </div>

                    <div className="border p-4 rounded-md shadow-md">
                      <p className="font-semibold">Slots</p>
                      <p className="font-bold mt-1">
                        {weapon.slots && weapon.slots.length > 0 ? (
                          weapon.slots.map(
                            (slots: ISlot, slotsIndex: number) => (
                              <span key={slotsIndex} className="block">
                                {slots.rank}
                              </span>
                            )
                          )
                        ) : (
                          <span>0</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto mt-6 flex gap-6">
          <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Elderseal
                  </th>
                </tr>
              </thead>
              <tbody>
                {weapon.elderseal !== null ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{weapon.elderseal}</td>
                  </tr>
                ) : (
                  <tr>
                    <td
                      colSpan={1}
                      className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      No Elderseal available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Elements Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Damage
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hidden
                  </th>
                </tr>
              </thead>
              <tbody>
                {weapon.elements && weapon.elements.length > 0 ? (
                  weapon.elements.map(
                    (elements: IElement, ElementIndex: number) => (
                      <tr
                        key={`${ElementIndex}`}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{elements.type}</td>
                        <td className="px-6 py-4">{elements.damage}</td>
                        <td className="px-6 py-4">{elements.hidden}</td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      No elements available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg h-full mt-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Weapon Sharpness
                </th>
                <th scope="col" className="px-6 py-3">
                  Red
                </th>
                <th scope="col" className="px-6 py-3">
                  Orange
                </th>
                <th scope="col" className="px-6 py-3">
                  yellow
                </th>
                <th scope="col" className="px-6 py-3">
                  green
                </th>
                <th scope="col" className="px-6 py-3">
                  blue
                </th>
                <th scope="col" className="px-6 py-3">
                  white
                </th>
                <th scope="col" className="px-6 py-3">
                  purple
                </th>
              </tr>
            </thead>
            <tbody>
              {weapon.durability && weapon.durability.length > 0 ? (
                weapon.durability.map(
                  (durability: IDurability, durabilityIndex: number) => {
                    const totalDurability =
                      durability.red +
                      durability.orange +
                      durability.yellow +
                      durability.green +
                      durability.blue +
                      durability.white +
                      durability.purple;

                    const getPercentage = (value: number) =>
                      (value / totalDurability) * 100;

                    return (
                      <tr
                        key={durabilityIndex}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">
                          <div className="w-full bg-gray-300 rounded-full h-4 flex overflow-hidden">
                            {durability.red > 0 && (
                              <div
                                className="h-4 bg-red-500"
                                style={{
                                  width: `${getPercentage(durability.red)}%`,
                                }}
                              />
                            )}
                            {durability.orange > 0 && (
                              <div
                                className="h-4 bg-orange-500"
                                style={{
                                  width: `${getPercentage(durability.orange)}%`,
                                }}
                              />
                            )}
                            {durability.yellow > 0 && (
                              <div
                                className="h-4 bg-yellow-500"
                                style={{
                                  width: `${getPercentage(durability.yellow)}%`,
                                }}
                              />
                            )}
                            {durability.green > 0 && (
                              <div
                                className="h-4 bg-green-500"
                                style={{
                                  width: `${getPercentage(durability.green)}%`,
                                }}
                              />
                            )}
                            {durability.blue > 0 && (
                              <div
                                className="h-4 bg-blue-500"
                                style={{
                                  width: `${getPercentage(durability.blue)}%`,
                                }}
                              />
                            )}
                            {durability.white > 0 && (
                              <div
                                className="h-4 bg-white"
                                style={{
                                  width: `${getPercentage(durability.white)}%`,
                                }}
                              />
                            )}
                            {durability.purple > 0 && (
                              <div
                                className="h-4 bg-purple-500"
                                style={{
                                  width: `${getPercentage(durability.purple)}%`,
                                }}
                              />
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">{durability.red}</td>
                        <td className="px-6 py-4">{durability.orange}</td>
                        <td className="px-6 py-4">{durability.yellow}</td>
                        <td className="px-6 py-4">{durability.green}</td>
                        <td className="px-6 py-4">{durability.blue}</td>
                        <td className="px-6 py-4">{durability.white}</td>
                        <td className="px-6 py-4">{durability.purple}</td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <td
                    colSpan={1}
                    className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    No Durability available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="w-9/12 mx-auto mt-6 flex gap-6">
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://i.etsystatic.com/11942120/r/il/df9f36/1502501210/il_570xN.1502501210_1fm6.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crafting Information
              </h5>
            </div>
          </a>

          <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1">
            <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Crafting Materials
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {weapon.crafting.craftingMaterials.length > 0 ? (
                  weapon.crafting.craftingMaterials.map((material, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">{material.item.name}</td>
                      <td className="px-6 py-4">
                        {material.quantity} required
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      No crafting materials available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="w-9/12 mx-auto relative overflow-auto shadow-md sm:rounded-lg h-full mt-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <div className="relative overflow-auto shadow-md sm:rounded-lg flex-1">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Upgrade Material
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weapon.crafting.upgradeMaterials &&
                      weapon.crafting.upgradeMaterials.length > 0 ? (
                        weapon.crafting.upgradeMaterials.map(
                          (material, index) => (
                            <tr
                              key={index}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <td className="px-6 py-4">
                                {material.item.name}
                              </td>
                              <td className="px-6 py-4">{material.quantity}</td>
                              <td className="px-6 py-4">
                                {material.item.description}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td
                            colSpan={3}
                            className="px-6 py-4 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            No upgrade materials available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </tbody>
            </table>
          </div>
        </div>

        <div className="navigation-buttons flex justify-between mt-4 w-10/12 mx-auto">
          <button
            onClick={goToPreviousWeapon}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Back
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to={`/Weapon`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to weapon List
            </Link>
            <Link
              to={`/`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to Home
            </Link>
          </div>
          <button
            onClick={goToNextWeapon}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailWeaponPage;
